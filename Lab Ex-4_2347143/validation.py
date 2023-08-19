from xml import etree

def validate_xml(xml_file, xsd_file):
    try:
        xml_doc = etree.parse(xml_file)
        xsd_doc = etree.parse(xsd_file)
        xml_schema = etree.XMLSchema(xsd_doc)

        if xml_schema.validate(xml_doc):
            print("XML document is valid.")
        else:
            print("XML document is not valid. Validation errors:")
            for error in xml_schema.error_log:
                print(f"Line {error.line}, Column {error.column}: {error.message}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    xml_file = "F:/Christ/1 Tri/Web Stack/xml/employees.xml"
    xsd_file = "F:/Christ/1 Tri/Web Stack/xml/employee_schema.xsd"
    validate_xml(xml_file, xsd_file)