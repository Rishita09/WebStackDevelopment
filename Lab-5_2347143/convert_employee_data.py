from lxml import etree

try:
    # parse the XML, XSD, XSL files
    xml_tree = etree.parse("employee_data.xml")
    xsd_tree = etree.parse("employee_schema.xsd")
    xsl_tree = etree.parse("employee_transform.xsl")

    # get a schema validator object
    schema = etree.XMLSchema(xsd_tree)

    # check if XML is valid
    schema.assertValid(xml_tree)

    # transform the XML using XSL
    html_tree = etree.XSLT(xsl_tree)(xml_tree)
except OSError as e:
    # if files are not found in the CWD
    print(e)
except etree.LxmlError as e:
    print(e)
else:
    # open a file object in binary mode to write to it
    # the HTML obtained as a result of the XSL Transformation of the XML
    with open("employee.html", "wb") as f:
        f.write(etree.tostring(html_tree, pretty_print=True))
        f.close()
