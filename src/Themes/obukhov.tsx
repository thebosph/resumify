import { Page, Text, View, Document, Image, Line } from "@react-pdf/renderer";
import { styles } from "./obukhovStyles";

const Obukhov = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.left}>
          <Image
            style={styles.image}
            src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          {/* Horizontal Line */}
          <View style={styles.horizontalLine}></View>
          <View style={styles.contact}>
            <Text style={{ fontSize: 20 }}>CONTACT</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image src="../img/phone.png" style={{ width: 15, height: 15 }} />
              <Text style={{ marginLeft: 10, fontSize: 15 }}>
                +91 1234567890
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image src="../img/mail.png" style={{ width: 15, height: 15 }} />
              <Text style={{ marginLeft: 10, fontSize: 15 }}>
                johndoe@gmail.com
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image src="../img/site.png" style={{ width: 15, height: 15 }} />
              <Text style={{ marginLeft: 10, fontSize: 15 }}>
                www.johndoe.com
              </Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.skills}>
            <Text style={{ fontSize: 20 }}>SKILLS</Text>
            <View
              style={{ flexDirection: "column", marginTop: 10, marginLeft: 5 }}
            >
              <Text style={{ fontSize: 12, marginTop: 5 }}>HTML</Text>
              <Text style={{ fontSize: 12, marginTop: 5 }}>CSS</Text>
              <Text style={{ fontSize: 12, marginTop: 5 }}>JavaScript</Text>
              <Text style={{ fontSize: 12, marginTop: 5 }}>React</Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.education}>
            <Text style={{ fontSize: 20 }}>EDUCATION</Text>
            <View
              style={{ flexDirection: "column", marginTop: 10, marginLeft: 5 }}
            >
              <Text style={{ fontSize: 15, marginTop: 5 }}>2015 - 2019</Text>
              <Text style={{ fontSize: 15, marginTop: 5 }}>
                B.Tech in Computer Science
              </Text>
              <Text style={{ fontSize: 15, marginTop: 5 }}>ABC University</Text>
            </View>
            <View
              style={{ flexDirection: "column", marginTop: 10, marginLeft: 5 }}
            >
              <Text style={{ fontSize: 12, marginTop: 5 }}>2015 - 2019</Text>
              <Text style={{ fontSize: 12, marginTop: 5 }}>
                B.Tech in Computer Science
              </Text>
              <Text style={{ fontSize: 15, marginTop: 5 }}>ABC University</Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.language}>
            <Text style={{ fontSize: 20 }}>LANGUAGE</Text>
            <View
              style={{ flexDirection: "column", marginTop: 5, marginLeft: 5 }}
            >
              <Text style={{ fontSize: 12, marginTop: 5 }}>English</Text>
              <Text style={{ fontSize: 12, marginTop: 5 }}>Hindi</Text>
              <Text style={{ fontSize: 12, marginTop: 5 }}>French</Text>
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 32,
            }}
          >
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.title}>Web Developer</Text>
            <Text style={styles.location}>San Francisco, California</Text>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.about}>
            <Text style={{ fontSize: 20 }}>ABOUT</Text>
            <Text style={{ fontSize: 12, marginTop: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac
              quam viverra nec consectetur ante hendrerit. Donec et mollis
              dolor. Praesent et diam eget
            </Text>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.experience}>
            <Text style={{ fontSize: 20 }}>EXPERIENCE</Text>
            <View
              style={{
                flexDirection: "row",

                marginTop: 10,
                marginLeft: 5,
              }}
            >
              {/* List Decoration */}
              <View style={styles.listDecoration}></View>
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>
                  2015 - 2019
                </Text>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>
                  Web Developer
                </Text>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>
                  ABC Company
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", marginTop: 10, marginLeft: 5 }}
            >
              <View style={styles.listDecoration}></View>
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>
                  2015 - 2019
                </Text>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>
                  Web Developer
                </Text>
                <Text style={{ fontSize: 15, marginBottom: 5 }}>
                  ABC Company
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Obukhov;
