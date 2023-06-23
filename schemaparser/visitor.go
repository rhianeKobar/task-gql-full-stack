package schemaparser

import (
	"github.com/jensneuse/graphql-go-tools/pkg/ast"
	"github.com/jensneuse/graphql-go-tools/pkg/astvisitor"
)

type visitor struct {
	astvisitor.Walker
	typeNames []string
	totalEnumDefinitions int
}

func newVisitor() *visitor {
	w := astvisitor.NewWalker(48)
	v := &visitor{
		Walker:    w,
		typeNames: []string{},
		totalEnumDefinitions: 0,
	}

	v.RegisterEnterDocumentVisitor(v)
	return v
}

func (v *visitor) EnterDocument(operation, definition *ast.Document) {
	for _, r := range operation.RootNodes {
		switch r.Kind {
		case ast.NodeKindEnumTypeDefinition:
			enumDefinitions := len(operation.EnumTypeDefinitions[r.Ref].EnumValuesDefinition.Refs)
			v.totalEnumDefinitions += enumDefinitions
		case ast.NodeKindObjectTypeDefinition:
			name := operation.ObjectTypeDefinitionNameString(r.Ref)
			v.typeNames = append(v.typeNames, name)
		default:
			continue
		}
	}
}
