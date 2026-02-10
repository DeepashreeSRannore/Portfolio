import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGraduationCap, FaBriefcase, FaCode, FaProjectDiagram, FaCertificate, FaBook } from 'react-icons/fa'
import './PortfolioPage.css'

const PortfolioPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div 
      className="portfolio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="portfolio-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section 
          id="hero"
          className="hero-section" 
          variants={itemVariants}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content">
            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <img 
                src="/assets/profile-image.jpeg" 
                alt="Deepashree Srinivasa Rao Rannore" 
                className="hero-image"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  // Try PNG as fallback
                  if (!e.target.src.includes('.png')) {
                    e.target.src = '/assets/profile-image.png';
                  } else {
                    // Show placeholder if both fail
                    e.target.style.display = 'none';
                    const container = e.target.parentElement;
                    if (container && !container.querySelector('.image-placeholder')) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'image-placeholder';
                      placeholder.innerHTML = `
                        <div style="width: 100%; height: 100%; border-radius: 50%; background: linear-gradient(135deg, var(--theme-primary), var(--theme-secondary)); display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">
                          👤
                        </div>
                      `;
                      container.appendChild(placeholder);
                    }
                  }
                }}
              />
            </motion.div>
            <motion.h1 
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hi ! Welcome to my space.
            </motion.h1>
            <motion.h2 
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I'm <span className="name-highlight">Deepashree Srinivasa Rao Rannore</span> <span className="pronouns">(she/her)</span>
            </motion.h2>
            <motion.p 
              className="scroll-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              please scroll down
            </motion.p>
            <motion.div 
              className="scroll-indicator"
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span>↓</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Header Section */}
        <motion.section id="header" className="header-section" variants={itemVariants}>
          <div className="header-content">
            <h1 className="main-name">Deepashree Srinivasa Rao Rannore <span className="pronouns">(she/her)</span></h1>
            <p className="main-title">Data Scientist | Automation Developer | AI & ML | Generative AI Enthusiastic</p>
            <div className="contact-info">
              <a href="mailto:Deeparannore2000@gmail.com" className="contact-item">
                <FaEnvelope /> Deeparannore2000@gmail.com
              </a>
              <a href="mailto:Srinivasaraorannor.d@northeastern.edu" className="contact-item">
                <FaEnvelope /> Srinivasaraorannor.d@northeastern.edu
              </a>
              <div className="contact-item">
                <FaMapMarkerAlt /> Boston, USA
              </div>
              <a href="https://www.linkedin.com/in/deepashree-srinivasa-rao-rannore/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/DeepashreeSRannore" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section id="education" className="section" variants={itemVariants}>
          <h2 className="section-title">
            <FaGraduationCap /> Education
          </h2>
          <div className="education-grid">
            <div className="education-card">
              <h3>Northeastern University</h3>
              <p className="degree">Masters in Data Science</p>
              <p className="period">Jan 2025 - Dec 2026</p>
              <p className="gpa">GPA: 3.467</p>
              <div className="coursework">
                <strong>Relevant Coursework:</strong>
                <ul>
                  <li>Algorithms</li>
                  <li>Machine Learning</li>
                  <li>Data Mining</li>
                  <li>Natural Language Processing</li>
                  <li>Generative AI</li>
                  <li>Essentials of Data Science</li>
                </ul>
              </div>
              <div className="achievements">
                <strong>Achievements:</strong>
                <ul>
                  <li>Graduate Teaching Assistant for Natural Language Processing</li>
                  <li>Data Engineer for The Office of Registrar</li>
                  <li>Senator of Technology for Graduate Student Government</li>
                  <li>RSO proctor</li>
                </ul>
              </div>
            </div>

            <div className="education-card">
              <h3>Visveswaraya Technological University</h3>
              <p className="degree">Bachelors in Engineering, Information Science Engineering</p>
              <p className="period">Aug 2018 - Aug 2022</p>
              <p className="gpa">GPA: 8.74</p>
              <div className="coursework">
                <strong>Relevant Coursework:</strong>
                <ul>
                  <li>Design and Analysis of Algorithms</li>
                  <li>DBMS</li>
                  <li>Operating Systems</li>
                  <li>Software Engineering</li>
                  <li>Artificial Intelligence and Machine learning</li>
                  <li>Web development</li>
                  <li>Bigdata Analytics</li>
                  <li>Computer vision and networking</li>
                  <li>Cloud computing</li>
                  <li>Software Development Life Cycle</li>
                </ul>
              </div>
              <div className="achievements">
                <strong>Achievements:</strong>
                <p>Ranked department topper for 4 consecutive years (2018-2022)</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Professional Experience Section */}
        <motion.section id="experience" className="section" variants={itemVariants}>
          <h2 className="section-title">
            <FaBriefcase /> Professional Experience
          </h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Data Engineer</h3>
                <p className="company">Northeastern University</p>
                <p className="period">Jan 2026 - Present (Part-time)</p>
                <ul>
                  <li>Maintained and updated course catalogue data in CourseLeaf and Banner systems, ensuring accurate course information for 10,000+ students across multiple campuses.</li>
                  <li>Developed data validation workflows to identify and resolve database inconsistencies between CourseLeaf and Banner, reducing registration errors.</li>
                  <li>Built ServiceNow dashboards to monitor data quality metrics and track course catalogue updates in real time.</li>
                  <li>Collaborated with academic departments to manage data pipelines syncing course offerings, prerequisites, and capacity limits for streamlined student registration.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Graduate Teaching Assistant</h3>
                <p className="company">Northeastern University, Boston | Natural Language Processing</p>
                <p className="period">Jan 2026 – Present (Part-time)</p>
                <ul>
                  <li>Mentored 50+ graduate students in core NLP topics including embedding space, transformer architectures, language models, supervised and unsupervised learning.</li>
                  <li>Conducted lecture sessions on Python primers, machine learning and deep learning fundamentals.</li>
                  <li>Evaluated 200+ assignments and course projects by reviewing Python code implementations of NLP algorithms.</li>
                  <li>Provided detailed technical feedback to improve code quality and model performance.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Automation Developer</h3>
                <p className="company">Cognizant Technology Solutions, Bengaluru</p>
                <p className="period">Sep 2022 – Dec 2024</p>
                <ul>
                  <li>Improved efficiency in pharmaceutical operations, saving 8 FTE (man hours) weekly by enabling automation resolution using flow designer modules in ServiceNow.</li>
                  <li>Utilized ServiceNow's AI-powered Predictive Intelligence to proactively resolve Control-M use cases for SMEs improving the automation accuracy by 38%.</li>
                  <li>Developed framework for Change Request lifecycle management, including backend processing, validation, and deployment of security patches across Windows and Linux server environments.</li>
                  <li>Ensured compliance with organizational security policies resulting in 2 FTE saving per week.</li>
                  <li>Spearheaded peer learning initiatives for 45+ developers that enhanced team collaboration and accelerated developer onboarding.</li>
                  <li><strong>Tools used:</strong> ServiceNow Integration Hub, Ansible Automation Platform, GitHub, PowerShell, JavaScript</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Internship Trainee</h3>
                <p className="company">Cognizant Technology Solutions, Bengaluru</p>
                <p className="period">Mar 2022 – Sep 2022</p>
                <ul>
                  <li>Built log management scripts in PowerShell and JavaScript for IA servers, reducing storage consumption and system outages by 23%.</li>
                  <li>Configured ServiceNow integration with target servers using REST and SOAP APIs, streamlining incident workflows.</li>
                  <li>Eliminated 0.5 FTE of manual processing through automated workflows.</li>
                  <li>Worked on hosting Azure VMs and configured enterprise integration using REST and SOAP APIs.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technical Skills Section */}
        <motion.section id="skills" className="section" variants={itemVariants}>
          <h2 className="section-title">
            <FaCode /> Technical Skills
          </h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">R</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">PowerShell</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Deep Learning & AI</h3>
              <div className="skill-tags">
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">Neural Networks</span>
                <span className="skill-tag">Deep Neural Networks</span>
                <span className="skill-tag">Transformers and LLMs</span>
                <span className="skill-tag">NLP</span>
                <span className="skill-tag">Generative AI</span>
                <span className="skill-tag">Responsible AI</span>
                <span className="skill-tag">RAG</span>
                <span className="skill-tag">Computer Vision</span>
                <span className="skill-tag">MLOps</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-tags">
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">Docker</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">ServiceNow IH</span>
                <span className="skill-tag">Ansible Automation (AAP)</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">Mobile Application</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">AWS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Core Competencies</h3>
              <div className="skill-tags">
                <span className="skill-tag">Algorithm Development</span>
                <span className="skill-tag">Performance Optimization</span>
                <span className="skill-tag">Code Reviews</span>
                <span className="skill-tag">Debugging</span>
                <span className="skill-tag">DevOps Automation</span>
                <span className="skill-tag">Data Analytics</span>
                <span className="skill-tag">Parallel Programming</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Data Mining</span>
                <span className="skill-tag">CI/CD data pipeline</span>
                <span className="skill-tag">API Integration</span>
                <span className="skill-tag">Excel documentation</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Research and Academic Projects Section */}
        <motion.section id="projects" className="section" variants={itemVariants}>
          <h2 className="section-title">
            <FaProjectDiagram /> Research and Academic Projects
          </h2>
          <div className="projects-grid">
            <a 
              href="https://github.com/DeepashreeSRannore/Corona-Virus-Detection-using-ML" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>Corona Virus Detection Using Machine Learning</h3>
              <p className="project-period">Mar 2022 - Jul 2022</p>
              <ul>
                <li>Led a team of 3 to achieve 92% accuracy in predicting COVID-19 symptoms using various machine learning algorithms.</li>
                <li>K-Nearest Neighbours (KNN) delivered the highest accuracy.</li>
                <li>Processed data using Python libraries such as Requests and BeautifulSoup.</li>
                <li>Performed data cleaning and predictive modelling using NumPy, Pandas, and scikit-learn.</li>
                <li>Represented the team at the state-level project expo "Innovative Project Scheme – by VTU".</li>
                <li><strong>Achievement:</strong> Won first place and received sponsorship from VTU.</li>
              </ul>
            </a>

            <a 
              href="https://github.com/DeepashreeSRannore/EEG-Based-Emotion-Detection-System-for-Non-Verbal-Patients" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>EEG-Based Emotion & Discomfort Detection System for Non-Verbal Patients</h3>
              <p className="project-period">Aug 2025 - Dec 2025</p>
              <ul>
                <li>Engineered a two-stage EEG classification system combining Multi-Scale Dynamic CNN with Gated Transformer for emotion detection (64.87% accuracy).</li>
                <li>Implemented EEGNet-based architecture for motor imagery classification (65.6% accuracy), enabling real-time discomfort identification.</li>
                <li>Pre-processed 3,608 EEG trials with bandpass filtering, Z-score normalization, and temporal segmentation.</li>
                <li>Optimized training using mixed precision and OneCycleLR scheduling, achieving 35% faster convergence.</li>
              </ul>
            </a>

            <a 
              href="https://github.com/DeepashreeSRannore/mental-health-sentiment-analysis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>Sentiment Analysis on Mental Health Statements</h3>
              <p className="project-period">Mar 2025 - Aug 2025</p>
              <ul>
                <li>Curated and structured a multi-source mental health dataset with 53k+ statements labeled across 7 conditions.</li>
                <li>Implemented evaluation framework for NLP models, comparing RoBERTa, TF-IDF + Logistic Regression, and LSTM.</li>
                <li>Achieved 5% improvement in the model's precision.</li>
              </ul>
            </a>

            <a 
              href="https://github.com/DeepashreeSRannore/mental-health-sentiment-analysis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>A Regression and Visualization Study of Data Science Job Market Trends</h3>
              <p className="project-period">Jan 2025 - April 2025</p>
              <ul>
                <li>Analyzed 10,000 job records across 2020-2023 to identify salary trends.</li>
                <li>Discovered that remote positions command 15-20% higher compensation due to global hiring practices.</li>
                <li>Built predictive salary model using linear regression and decision trees with strong performance metrics.</li>
                <li>Processed and cleaned dataset using Z-score and IQR methods, ensuring 95% data quality.</li>
                <li>Discovered that senior roles in large companies earn 40-50% more than entry-level positions.</li>
              </ul>
            </a>
          </div>
        </motion.section>

        {/* Publication Section */}
        <motion.section id="publication" className="section" variants={itemVariants}>
          <h2 className="section-title">
            <FaBook /> Publication
          </h2>
          <div className="publication-card">
            <h3>Coronavirus Detection Using Machine learning</h3>
            <p className="journal">IJRAR.ORG, Oct 2022</p>
            <p className="issn">E-ISSN: 2348-1269, P-ISSN: 2349-5138</p>
            <a 
              href="https://ijrar.org/papers/IJRAR22D1241.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="publication-link"
            >
              Read Publication →
            </a>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section id="certifications" className="section" variants={itemVariants}>
          <h2 className="section-title">
            <FaCertificate /> Certifications
          </h2>
          <div className="certifications-grid">
            <a 
              href="https://www.coursera.org/account/accomplishments/verify/7G4CMKWDOI1W" 
              target="_blank" 
              rel="noopener noreferrer"
              className="certification-card"
            >
              <h3>Exploratory Data Analysis for Machine Learning</h3>
              <p className="cert-issuer">IBM labs</p>
              <p className="cert-year">Feb 2026 | View the certificate →</p>
            </a>

            <a 
              href="https://courses.cognitiveclass.ai/certificates/c6727ce6f0bd491d9845216c48fe5d20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="certification-card"
            >
              <h3>Deep Learning with Tensorflow</h3>
              <p className="cert-issuer">IBM labs</p>
              <p className="cert-year">2026 | View the certificate →</p>
            </a>

            <a 
              href="https://www.skills.google/public_profiles/73d5e1e3-dfca-4809-ae3d-307e787b8d9e" 
              target="_blank" 
              rel="noopener noreferrer"
              className="certification-card"
            >
              <h3>Generative AI Developer Badges</h3>
              <p className="cert-issuer">Google</p>
              <p className="cert-year">2025 | View the badge →</p>
            </a>

            <div className="certification-card">
              <h3>Ansible Advanced-Hands-On-DevOps</h3>
              <p className="cert-issuer">Udemy</p>
              <p className="cert-year">2023</p>
            </div>

            <div className="certification-card">
              <h3>PowerShell - Essential Course with labs</h3>
              <p className="cert-issuer">Udemy</p>
              <p className="cert-year">2023</p>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer className="footer" variants={itemVariants}>
          <p>© 2026 Deepashree Srinivasa Rao Rannore. All rights reserved.</p>
          <p className="footer-note">Built with React & Framer Motion</p>
        </motion.footer>
      </motion.div>
    </motion.div>
  )
}

export default PortfolioPage
