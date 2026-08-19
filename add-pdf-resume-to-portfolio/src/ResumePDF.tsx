import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiJ-Ek-_EeA.woff",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiJ-Ek-_EeA.woff",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 9,
    color: "#1a1a2e",
    backgroundColor: "#ffffff",
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
  },
  // Header
  header: {
    marginBottom: 16,
    borderBottom: "2px solid #6366f1",
    paddingBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    color: "#1a1a2e",
    letterSpacing: 1,
    marginBottom: 4,
  },
  tagline: {
    fontSize: 11,
    color: "#6366f1",
    fontWeight: 600,
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 4,
  },
  contactItem: {
    fontSize: 8,
    color: "#4b5563",
  },
  contactLink: {
    fontSize: 8,
    color: "#6366f1",
    textDecoration: "none",
  },
  // Two-column layout
  body: {
    flexDirection: "row",
    gap: 18,
  },
  leftCol: {
    width: "62%",
  },
  rightCol: {
    width: "38%",
  },
  // Section
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: "#6366f1",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    borderBottom: "1px solid #e0e7ff",
    paddingBottom: 3,
    marginBottom: 8,
  },
  // Summary
  summaryText: {
    fontSize: 8.5,
    color: "#374151",
    lineHeight: 1.6,
  },
  // Project
  projectCard: {
    marginBottom: 10,
    padding: 8,
    backgroundColor: "#f8f9ff",
    borderLeft: "3px solid #6366f1",
    borderRadius: 3,
  },
  projectTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: "#1a1a2e",
    marginBottom: 3,
  },
  projectDesc: {
    fontSize: 8,
    color: "#4b5563",
    lineHeight: 1.5,
    marginBottom: 5,
  },
  techRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  techTag: {
    fontSize: 7,
    color: "#6366f1",
    backgroundColor: "#e0e7ff",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  metricsRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 5,
  },
  metric: {
    alignItems: "center",
  },
  metricValue: {
    fontSize: 9,
    fontWeight: 700,
    color: "#6366f1",
  },
  metricLabel: {
    fontSize: 6.5,
    color: "#9ca3af",
    letterSpacing: 0.5,
  },
  // Experience / Education
  entryTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: "#1a1a2e",
    marginBottom: 1,
  },
  entrySubtitle: {
    fontSize: 8,
    color: "#6366f1",
    marginBottom: 1,
  },
  entryMeta: {
    fontSize: 7.5,
    color: "#9ca3af",
    marginBottom: 3,
  },
  entryDesc: {
    fontSize: 8,
    color: "#4b5563",
    lineHeight: 1.5,
  },
  entryBlock: {
    marginBottom: 9,
  },
  // Skills
  skillGroup: {
    marginBottom: 8,
  },
  skillGroupTitle: {
    fontSize: 8,
    fontWeight: 700,
    color: "#374151",
    marginBottom: 4,
  },
  skillsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  skillChip: {
    fontSize: 7.5,
    color: "#374151",
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 6,
    paddingVertical: 2.5,
    borderRadius: 3,
    borderLeft: "2px solid #6366f1",
  },
  // Cert
  certEntry: {
    marginBottom: 7,
  },
  certTitle: {
    fontSize: 8,
    fontWeight: 600,
    color: "#1a1a2e",
    marginBottom: 1,
  },
  certIssuer: {
    fontSize: 7.5,
    color: "#6366f1",
    marginBottom: 1,
  },
  certDate: {
    fontSize: 7,
    color: "#9ca3af",
  },
  // Achievements
  achievementRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
    gap: 5,
  },
  bullet: {
    fontSize: 10,
    color: "#6366f1",
    marginTop: -1,
  },
  achievementText: {
    fontSize: 8,
    color: "#374151",
    lineHeight: 1.5,
    flex: 1,
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTop: "1px solid #e5e7eb",
    paddingTop: 6,
  },
  footerText: {
    fontSize: 7,
    color: "#9ca3af",
  },
});

export const ResumePDF = () => (
  <Document
    title="Abhishek Kumar — Resume"
    author="Abhishek Kumar"
    subject="Web Developer & AI Engineer Resume"
  >
    <Page size="A4" style={styles.page}>
      {/* ── HEADER ── */}
      <View style={styles.header}>
        <Text style={styles.name}>ABHISHEK KUMAR</Text>
        <Text style={styles.tagline}>Web Developer & AI Engineer · Open to Work</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>📍 Bengaluru, India</Text>
          <Link src="mailto:abhishek.k040@gmail.com" style={styles.contactLink}>
            abhishek.k040@gmail.com
          </Link>
          <Link src="https://github.com/abhishekkumar040" style={styles.contactLink}>
            github.com/abhishekkumar040
          </Link>
          <Link src="https://abhishekkumar040.github.io/portfolio-/" style={styles.contactLink}>
            Portfolio
          </Link>
          <Link src="https://www.instagram.com/abhishek.media" style={styles.contactLink}>
            @abhishek.media
          </Link>
        </View>
      </View>

      {/* ── TWO-COLUMN BODY ── */}
      <View style={styles.body}>
        {/* LEFT COLUMN */}
        <View style={styles.leftCol}>
          {/* Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Text style={styles.summaryText}>
              Final-year Computer Science Engineering student at Acharya Institute of Technology,
              Bengaluru, building web applications and AI systems that explain their own decisions.
              My flagship project detects phishing websites in real time using Explainable AI (SHAP/LIME),
              surfacing the exact signals behind every prediction rather than just a score. Alongside
              technical work, I'm a photo & video journalist and media influencer with a 150K+ combined
              audience across Instagram, YouTube, and Facebook — bridging problem-solving through code
              with storytelling through media. Currently expanding into DevOps and prompt engineering.
            </Text>
          </View>

          {/* Projects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>

            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>Real-Time Phishing Website Detection</Text>
              <Text style={styles.projectDesc}>
                A machine learning system that analyzes URL, domain, and content-based features to
                catch zero-day phishing attacks that bypass traditional blacklists. Predictions are
                explained in plain language via SHAP and LIME — surfacing the exact signals (domain
                age, URL length) behind every prediction, not just a confidence score. Deployed via
                Flask REST API for real-time inference.
              </Text>
              <View style={styles.techRow}>
                {["Python", "Random Forest", "XGBoost", "SHAP / LIME", "Flask", "Explainable AI"].map(
                  (t) => (
                    <Text key={t} style={styles.techTag}>
                      {t}
                    </Text>
                  )
                )}
              </View>
              <View style={styles.metricsRow}>
                {[
                  { v: "96%", l: "ACCURACY" },
                  { v: "95%", l: "PRECISION" },
                  { v: "94%", l: "RECALL" },
                  { v: "94%", l: "F1-SCORE" },
                ].map((m) => (
                  <View key={m.l} style={styles.metric}>
                    <Text style={styles.metricValue}>{m.v}</Text>
                    <Text style={styles.metricLabel}>{m.l}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>Full-Stack Web Platform</Text>
              <Text style={styles.projectDesc}>
                Built full-stack web applications using React/Next.js frontend with Prisma ORM and
                SQLite/SQL backends. Designed responsive UIs with TypeScript, handled REST API
                integrations, and deployed via Vercel and Netlify with CI/CD pipelines.
              </Text>
              <View style={styles.techRow}>
                {["React", "Next.js", "TypeScript", "Prisma", "SQLite", "REST APIs", "Vercel"].map(
                  (t) => (
                    <Text key={t} style={styles.techTag}>
                      {t}
                    </Text>
                  )
                )}
              </View>
            </View>
          </View>

          {/* Experience / Beyond Code */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>

            <View style={styles.entryBlock}>
              <Text style={styles.entryTitle}>Media Influencer & Photo/Video Journalist</Text>
              <Text style={styles.entrySubtitle}>ABHISHEK.MEDIA · Self-Employed</Text>
              <Text style={styles.entryMeta}>2021 – Present · Bengaluru & Remote</Text>
              <Text style={styles.entryDesc}>
                Built and managed a 150K+ combined audience across Instagram, YouTube, and Facebook
                posting daily photo & video journalism content. Followed by notable public figures.
                Developed brand identity, content strategy, and production pipeline end-to-end.
              </Text>
            </View>

            <View style={styles.entryBlock}>
              <Text style={styles.entryTitle}>Social Media Manager & Content Creator</Text>
              <Text style={styles.entrySubtitle}>Film & Entertainment Clients · Freelance</Text>
              <Text style={styles.entryMeta}>2022 – Present</Text>
              <Text style={styles.entryDesc}>
                Managed social media presence and PR content for high-profile figures in film and
                entertainment — handling content creation, photography, and audience engagement end
                to end.
              </Text>
            </View>

            <View style={styles.entryBlock}>
              <Text style={styles.entryTitle}>Hackathon Participant</Text>
              <Text style={styles.entrySubtitle}>Multiple Events</Text>
              <Text style={styles.entryMeta}>2023 – Present</Text>
              <Text style={styles.entryDesc}>
                Participated in multiple hackathons, collaborating with cross-functional teams on
                technical problem-solving under real-time constraints.
              </Text>
            </View>
          </View>
        </View>

        {/* RIGHT COLUMN */}
        <View style={styles.rightCol}>
          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>

            <View style={styles.entryBlock}>
              <Text style={styles.entryTitle}>B.E. Computer Science & Engineering</Text>
              <Text style={styles.entrySubtitle}>Acharya Institute of Technology</Text>
              <Text style={styles.entryMeta}>Bengaluru · 2023 – 2027</Text>
              <Text style={styles.entryDesc}>CGPA: 7.4 · Currently in 4th year</Text>
            </View>

            <View style={styles.entryBlock}>
              <Text style={styles.entryTitle}>Class XII</Text>
              <Text style={styles.entrySubtitle}>Chauhan Public School</Text>
              <Text style={styles.entryMeta}>Bhagalpur · 2021</Text>
              <Text style={styles.entryDesc}>65%</Text>
            </View>

            <View style={styles.entryBlock}>
              <Text style={styles.entryTitle}>Class X</Text>
              <Text style={styles.entrySubtitle}>Navyug Vidyalaya</Text>
              <Text style={styles.entryMeta}>Bhagalpur · 2019</Text>
              <Text style={styles.entryDesc}>60%</Text>
            </View>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>

            <View style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>Languages</Text>
              <View style={styles.skillsWrap}>
                {["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"].map((s) => (
                  <Text key={s} style={styles.skillChip}>{s}</Text>
                ))}
              </View>
            </View>

            <View style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>AI / ML</Text>
              <View style={styles.skillsWrap}>
                {["SHAP / LIME", "Prompt Engineering", "XGBoost", "Random Forest"].map((s) => (
                  <Text key={s} style={styles.skillChip}>{s}</Text>
                ))}
              </View>
            </View>

            <View style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>Frameworks</Text>
              <View style={styles.skillsWrap}>
                {["React", "Next.js", "FastAPI", "Flask", "Prisma"].map((s) => (
                  <Text key={s} style={styles.skillChip}>{s}</Text>
                ))}
              </View>
            </View>

            <View style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>Tools & Cloud</Text>
              <View style={styles.skillsWrap}>
                {["Git", "Linux", "Docker", "AWS", "Figma", "REST APIs"].map((s) => (
                  <Text key={s} style={styles.skillChip}>{s}</Text>
                ))}
              </View>
            </View>

            <View style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>Deployment</Text>
              <View style={styles.skillsWrap}>
                {["Vercel", "Netlify", "Render"].map((s) => (
                  <Text key={s} style={styles.skillChip}>{s}</Text>
                ))}
              </View>
            </View>
          </View>

          {/* Certifications */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>

            {[
              {
                title: "AWS Certified DevOps Engineer Professional (DOP-C02) — Cert Prep",
                issuer: "LinkedIn Learning",
                date: "Jul 2026 · 21h 27m",
              },
              {
                title: "Foundations of Cybersecurity",
                issuer: "Google · Coursera",
                date: "Completed",
              },
              {
                title: "JavaScript Basics",
                issuer: "UC Davis · Coursera",
                date: "Completed",
              },
              {
                title: "Azure Administration Essential Training",
                issuer: "LinkedIn Learning",
                date: "Nov 2025 · 3h 21m",
              },
              {
                title: "Agile Project Management with Jira Cloud",
                issuer: "LinkedIn Learning · PMI REP",
                date: "Oct 2025 · 1 PDU",
              },
              {
                title: "Jira: Basic Administration",
                issuer: "LinkedIn Learning",
                date: "Oct 2025 · 1h 24m",
              },
            ].map((c) => (
              <View key={c.title} style={styles.certEntry}>
                <Text style={styles.certTitle}>{c.title}</Text>
                <Text style={styles.certIssuer}>{c.issuer}</Text>
                <Text style={styles.certDate}>{c.date}</Text>
              </View>
            ))}
          </View>

          {/* Key Stats */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Stats</Text>
            {[
              { v: "150K+", l: "Combined Social Audience" },
              { v: "96%", l: "ML Model Accuracy" },
              { v: "7.4", l: "CGPA / 10" },
              { v: "6+", l: "Certifications" },
              { v: "2027", l: "Graduation Year" },
            ].map((stat) => (
              <View key={stat.l} style={styles.achievementRow}>
                <Text style={styles.bullet}>▸</Text>
                <Text style={styles.achievementText}>
                  <Text style={{ fontWeight: 700, color: "#6366f1" }}>{stat.v}</Text>
                  {"  "}{stat.l}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* ── FOOTER ── */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>Abhishek Kumar · Web Developer & AI Engineer</Text>
        <Link src="https://abhishekkumar040.github.io/portfolio-/" style={styles.footerText}>
          abhishekkumar040.github.io/portfolio-/
        </Link>
      </View>
    </Page>
  </Document>
);
