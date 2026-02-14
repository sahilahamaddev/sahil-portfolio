import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

function Certificates() {
  const certificates = [
    {
      title: "React Development Certificate.",
      description: "Completed advanced React.js development course with hands-on projects.",
      img: process.env.PUBLIC_URL + "/React.jpg",
    },
    {
      title: "AI Workshop Certificate.",
      description: "Participated in cutting-edge AI workshop with real-world applications.",
      img: process.env.PUBLIC_URL + "/cert1.jpg",
    },
    {
      title: "Microsoft Proficiency",
      description: "Mastered Microsoft Office Suite with advanced productivity techniques.",
      img: process.env.PUBLIC_URL + "/cert.jpg",
    },
    {
      title: "Hackathon Participation",
      description: "Competed in high-intensity hackathon, building innovative solutions.",
      img: process.env.PUBLIC_URL + "/hack.jpg",
    },
    {
      title: "Aptitude Test Excellence",
      description: "Scored in top percentile on comprehensive aptitude assessment.",
      img: process.env.PUBLIC_URL + "/apt.jpg",
    },
    {
      title: "Python with Flask Mastery",
      description: "Built production-ready web apps using Python & Flask framework.",
      img: process.env.PUBLIC_URL + "/python.jpg",
    },
  ];

  // 🔥 FULL PAGE 3D PARTICLES 🔥
  const particles = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    speedX: (Math.random() - 0.5) * 0.04,
    speedY: (Math.random() - 0.5) * 0.03,
    speedZ: Math.random() * 0.025,
    depth: Math.random() * 100,
    hue: Math.random() * 60 + 240,
    opacity: Math.random() * 0.5 + 0.3
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <>
      {/* 🔥 BACKGROUND PARTICLES - FIXED POSITION 🔥 */}
      <div className="certificates-bg" style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100vw", 
        height: "100vh", 
        background: "linear-gradient(135deg, #0f0f23 0%, #1a0f2e 50%, #2a1a3d 100%)",
        overflow: "hidden",
        zIndex: -1
      }}>
        <div className="particles-container">
          {particles.map((particle) => {
            const time = Date.now() * 0.001;
            const x = 50 + Math.sin(time * particle.speedX + particle.id) * 50;
            const y = 50 + Math.cos(time * particle.speedY + particle.id) * 50;
            
            return (
              <motion.div
                key={particle.id}
                className="particle-3d-full"
                animate={{
                  x,
                  y,
                  rotateX: time * 20 + particle.id * 10,
                  rotateY: time * 15 + particle.id * 15,
                  scale: 0.5 + Math.sin(time * 0.003 + particle.id) * 0.5,
                  opacity: particle.opacity + Math.sin(time * 0.002 + particle.id) * 0.2
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
                style={{
                  position: "absolute",
                  width: particle.size,
                  height: particle.size,
                  left: `${x}%`,
                  top: `${y}%`,
                  background: `radial-gradient(circle, hsl(${particle.hue}, 70%, 60%), hsl(${particle.hue}, 50%, 40%), transparent)`,
                  borderRadius: "50%",
                  boxShadow: "0 0 30px rgba(102,126,234,0.6)",
                  pointerEvents: "none"
                }}
              />
            );
          })}
        </div>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <Container fluid style={{ 
        marginTop: "120px", 
        position: "relative", 
        zIndex: 10, 
        paddingBottom: "120px"
      }}>
        <Container style={{ maxWidth: "1400px" }}>
          {/* My Certificates - UPAR */}
          <motion.h1 
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
            style={{ 
              fontSize: "clamp(3rem, 8vw, 4.5rem)",
              fontWeight: "900",
              color: "white",
              textShadow: "0 15px 40px rgba(255,255,255,0.4)",
              marginBottom: "10rem !important"  // BADHA DIYA SPACE
            }}
          >
            My Certificates
          </motion.h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ paddingBottom: "4rem", marginTop: "2rem" }}  // ✅ CERTIFICATES NICHE
          >
            {/* BIGGER GAPS BETWEEN CERTIFICATES */}
            <Row className="g-5 g-lg-6 justify-content-center">
              {certificates.map((cert, index) => (
                <Col xs={12} sm={6} lg={4} key={cert.title}>
                  <div style={{ paddingBottom: "2rem" }}>
                    <motion.div
                      variants={cardVariants}
                      whileHover={{
                        y: -25,
                        scale: 1.03,
                        rotateX: -10,
                        boxShadow: "0 35px 70px -25px rgba(102,126,234,0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card 
                        className="h-100 overflow-hidden position-relative"
                        style={{
                          borderRadius: "24px",
                          border: "1px solid rgba(102,126,234,0.2)",
                          background: "rgba(255,255,255,0.97)",
                          backdropFilter: "blur(25px)",
                          boxShadow: "0 25px 50px -20px rgba(0,0,0,0.2)",
                          height: "360px"
                        }}
                      >
                        {/* Shine Effect */}
                        <motion.div 
                          initial={{ x: "-100%" }}
                          animate={{ x: "130%" }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "160px",
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
                            zIndex: 5,
                            pointerEvents: "none"
                          }}
                        />

                        {/* Image */}
                        <div style={{ height: "175px", overflow: "hidden", position: "relative" }}>
                          <motion.div 
                            whileHover={{ 
                              scale: 1.12, 
                              filter: "brightness(1.2) contrast(1.1)" 
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <Card.Img 
                              src={cert.img}
                              alt={cert.title}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                              }}
                            />
                          </motion.div>
                          <div 
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              height: "60px",
                              background: "linear-gradient(transparent, rgba(0,0,0,0.85))"
                            }}
                          />
                        </div>

                        <Card.Body className="p-4 pt-5 position-relative" style={{ paddingTop: "3.2rem" }}>
                          {/* Verified Badge */}
                          <motion.span
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", delay: 0.2 }}
                            className="position-absolute"
                            style={{
                              top: "-18px",
                              right: "24px",
                              background: "linear-gradient(135deg, #667eea, #764ba2, #a855f7)",
                              color: "white",
                              borderRadius: "25px",
                              fontSize: "0.8rem",
                              padding: "10px 18px",
                              fontWeight: "700",
                              boxShadow: "0 10px 30px rgba(102,126,234,0.7)",
                              zIndex: 20
                            }}
                          >
                            ✨ Verified
                          </motion.span>

                          <Card.Title className="mb-3 fw-bold" style={{
                            fontSize: "1.25rem",
                            background: "linear-gradient(135deg, #1e293b, #334155)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            marginTop: "12px",
                            lineHeight: "1.3"
                          }}>
                            {cert.title}
                          </Card.Title>
                          
                          <Card.Text className="text-muted mb-4" style={{ 
                            fontSize: "0.92rem",
                            lineHeight: "1.6",
                            color: "#64748b"
                          }}>
                            {cert.description}
                          </Card.Text>

                          <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                            <Button 
                              href={cert.img} 
                              target="_blank"
                              className="w-100 fw-bold rounded-pill py-2 px-4"
                              style={{
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #a855f7 100%)",
                                border: "none",
                                fontSize: "0.95rem",
                                boxShadow: "0 12px 35px rgba(102,126,234,0.5)",
                                height: "44px",
                                letterSpacing: "0.5px"
                              }}
                              whileHover={{
                                boxShadow: "0 20px 50px rgba(102,126,234,0.7)",
                                y: -3
                              }}
                              whileTap={{ scale: 0.96 }}
                            >
                              👁️ View Certificate
                            </Button>
                          </motion.div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </Container>

      <style jsx global>{`
        .certificates-bg {
          z-index: -1 !important;
        }
        
        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .particle-3d-full {
          will-change: transform;
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
            margin-bottom: 6rem !important;
          }
        }
      `}</style>
    </>
  );
}

export default Certificates;
