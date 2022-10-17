import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { styles } from "./detailKingStyles";
import { url } from "inspector";

type Props = {
  color?: string;
};

// Create Document Component
const DetailKing = ({ color }: Props) => (
  <Document>
    <Page size="A4" style={[styles.page, { backgroundColor: color }]}>
      <View style={styles.headerSection}>
        <View style={styles.headerLeft}>
          <Image
            style={{ width: 100, height: 100, borderRadius: 100 }}
            src={{
              uri: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              method: "GET",
              headers: { "Cache-Control": "no-cache" },
              body: "",
            }}
          />
          <Text style={styles.headerName}>John Doe</Text>
          <Text style={styles.headerTitle}>Web Developer</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerContact}>+91 1234567890</Text>
          <Text style={styles.headerContact}>"ibrahimsimsek01@gmail.com"</Text>
          <Text style={styles.headerContact}>www.johndoe.com</Text>
        </View>
      </View>
      {/* Horizontal line */}
      <View style={styles.line}></View>
      <View style={styles.bodySection}>
        <View style={styles.bodyLeft}>
          <View style={styles.bodyLeftSection}>
            <Text style={styles.bodyLeftSectionTitle}>EXPERIENCES</Text>
            <View style={styles.bodyLeftSectionContent}>
              <Text style={styles.bodyLeftSectionContentCompany}>Google</Text>
              <Text style={styles.bodyLeftSectionContentTitle}>
                Frontend Developer
              </Text>

              <Text style={styles.bodyLeftSectionContentDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptas, quod, quia, voluptates quae voluptatibus quibusdam
                doloremque quas quidem natus quos. Quisquam, quae. Quisquam
                voluptates quae, quod, quibusdam, quia voluptatibus quidem
                doloremque quas natus.
              </Text>
              <Text style={styles.bodyLeftSectionContentDate}>
                2019 - Present
              </Text>
            </View>
          </View>
          <View style={styles.bodyLeftSection}>
            <Text style={[styles.bodyLeftSectionTitle, { marginTop: 20 }]}>
              EDUCATION
            </Text>
            <View style={styles.bodyLeftSectionContent}>
              <Text style={styles.bodyLeftSectionContentCompany}>
                Bogazici Univercity
              </Text>
              <Text style={styles.bodyLeftSectionContentTitle}>
                Bachelor of Science
              </Text>

              <Text style={styles.bodyLeftSectionContentDate}>
                2019 - Present
              </Text>
              <Text style={styles.bodyLeftSectionContentDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptas, quod, quia, voluptates quae voluptatibus quibusdam
                doloremque quas quidem natus quos. Quisquam, quae. Quisquam
                voluptates quae, quod, quibusdam, quia voluptatibus quidem
                doloremque quas natus.
              </Text>
            </View>
          </View>
        </View>
        {/* Vertical Line */}
        <View style={styles.lineVertical}></View>
        <View style={styles.bodyRight}>
          <View style={styles.bodyRightSection}>
            <Text style={styles.bodyRightSectionTitle}>SKILLS</Text>

            <View style={styles.bodyRightSectionContent}>
              <Text style={styles.bodyRightSectionSubtitle}>TECHNICAL</Text>
              <View style={{ marginLeft: 4, marginTop: 4 }}>
                <Text style={styles.bodyRightSectionContentTitle}>CSS</Text>
                <Text style={styles.bodyRightSectionContentTitle}>
                  JavaScript
                </Text>
                <Text style={styles.bodyRightSectionContentTitle}>React</Text>
              </View>
            </View>
            <View style={styles.bodyRightSectionContent}>
              <Text style={styles.bodyRightSectionSubtitle}>SOFT SKILLS</Text>
              <View style={{ marginLeft: 4, marginTop: 4 }}>
                <Text style={styles.bodyRightSectionContentTitle}>
                  Flexbility
                </Text>
                <Text style={styles.bodyRightSectionContentTitle}>
                  Sedulity
                </Text>
                <Text style={styles.bodyRightSectionContentTitle}>
                  Adaptability{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bodyRightSection}>
            <Text style={[styles.bodyRightSectionTitle, { marginTop: 10 }]}>
              LANGUAGES
            </Text>
            <View style={styles.bodyRightSectionContent}>
              <Text style={styles.bodyRightSectionContentTitle}>English</Text>
              <Text style={styles.bodyRightSectionContentTitle}>Turkish</Text>
              <Text style={styles.bodyRightSectionContentTitle}>German</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default DetailKing;
