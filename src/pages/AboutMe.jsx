import {
  Image,
  Stack,
  CardBody,
  Card,
  Heading,
  Text,
  CardFooter,
  Box,
  Icon,
  Flex,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

import NavbarComponent from "../Components/NavbarComponent";
import CardEducation from "../Components/CardComponent";

import FooterComponent from "../Components/FooterComponent";
import profileImage from "../assets/img/profile.png";
import logoUnpam from "../assets/img/Logo Unpam 1.png";
import logoLearningX from "../assets/img/Logo LearningX.png";

import {
  faSquareInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUserGraduate,
  faLink,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion, AnimatePresence } from "framer-motion";

import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

const AboutMe = () => {
  return (
    <section className='App-header' id='about-me'>
      {/* Navabar Start */}
      {/* <NavbarComponent /> */}
      {/* Navabar End */}

      <Box>
        <NavbarComponent />
        <AnimatePresence>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Biodata Card Start */}

            <Box px={{ base: "5", xl: "20" }}>
              <AnimatedWrapper>
                <Flex justifyContent='center' alignItems='center'>
                  <Card
                    direction={{ base: "column", xl: "row" }}
                    overflow='hidden'
                    bgColor={useColorModeValue(
                      "primary.whiteDoff",
                      "fontColor.black"
                    )}
                    borderRadius='20'
                    boxShadow={`0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)`}
                    width={{ md: "100%", xl: "100%", md: "100%" }}
                  >
                    <Box
                      w={{ md: "290px", base: "200px", xl: "60%" }}
                      h={{ md: "290px", base: "200px", xl: "100%" }}
                      ml={{ base: "30px", xl: "17px" }}
                      mr={{ base: "30px", xl: "0px" }}
                      mb={{ base: "2px", xl: "17px" }}
                      mt={{ base: "17px", xl: "17px" }}
                      borderRadius='20'
                      bgGradient={useColorModeValue(
                        "linear(secondary.gray, secondary.gray)",
                        "linear(to-t, fontColor.dark, fontColor.black)"
                      )}
                      boxShadow={`0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)`}
                      alignSelf='center'
                    >
                      <Image
                        w={{ md: "100%", base: "99.5%", xl: "100%" }}
                        h={{ md: "100%", base: "99.5%", xl: "250px" }}
                        src={profileImage}
                        alt='Profile'
                        objectFit='contain'
                      />
                    </Box>

                    <Stack>
                      <CardBody textAlign={{ base: "center", xl: "left" }}>
                        <Heading
                          size='md'
                          ml='1'
                          color={useColorModeValue(
                            "fontColor.black",
                            "primary.whiteDoff"
                          )}
                        >
                          Hi! I am,
                        </Heading>
                        <Heading
                          size={{ base: "lg", lg: "xl" }}
                          mb='10px'
                          color={useColorModeValue(
                            "fontColor.black",
                            "primary.whiteDoff"
                          )}
                        >
                          Muhammad Arkhab
                        </Heading>

                        <Text
                          fontSize={{ base: "xs", lg: "15px" }}
                          color={useColorModeValue(
                            "fontColor.black",
                            "primary.whiteDoff"
                          )}
                        >
                          Student informatics engineering with internship
                          experience in various company, have interest and
                          skills in Mobile App Development, Website Development
                          and Graphic Design. Committed and responsible in the
                          position being worked on. Dedicated to finding places
                          that support learning and skills for the future.
                        </Text>
                      </CardBody>

                      <CardFooter
                        justifyContent={{ base: "center", xl: "left" }}
                        mt='-30'
                      >
                        <Box display='flex' alignItems='center'>
                          <Icon
                            as={FontAwesomeIcon}
                            icon={faLink}
                            mr='3px'
                            size='lg'
                          />
                          <Text
                            color={useColorModeValue(
                              "fontColor.black",
                              "primary.whiteDoff"
                            )}
                            fontSize={{ base: "sm", xl: "md" }}
                          >
                            Contact Me:
                          </Text>
                        </Box>

                        <Flex ml='15px' gap='2'>
                          <motion.a
                            href='https://www.linkedin.com/in/muhammad-arkhab/'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Icon
                              as={FontAwesomeIcon}
                              icon={faLinkedinIn}
                              size='xl'
                            />
                          </motion.a>

                          <motion.a
                            href='https://www.instagram.com/artkhabp/'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Icon
                              as={FontAwesomeIcon}
                              icon={faSquareInstagram}
                              size='xl'
                            />
                          </motion.a>

                          <motion.a
                            href='https://github.com/Arkhabp'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Icon
                              as={FontAwesomeIcon}
                              icon={faGithub}
                              size='xl'
                            />
                          </motion.a>

                          <motion.a
                            href='arkhabagdana1@gmail.com'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Icon
                              as={FontAwesomeIcon}
                              icon={faEnvelope}
                              size='xl'
                            />
                          </motion.a>
                        </Flex>
                      </CardFooter>
                    </Stack>
                  </Card>
                </Flex>
              </AnimatedWrapper>
              {/* Biodata Card End */}

              {/* Title Education Start */}
              <Flex
                mt='10'
                // mx={{ md: "19", base: "1", xl: "20" }}
                alignItems='center'
              >
                <Icon
                  as={FontAwesomeIcon}
                  icon={faUserGraduate}
                  boxSize={{ md: "27", base: "5", xl: "27" }}
                  mr='2'
                  color={useColorModeValue(
                    "fontColor.black",
                    "primary.whiteDoff"
                  )}
                />
                <Heading
                  color={useColorModeValue(
                    "fontColor.black",
                    "primary.whiteDoff"
                  )}
                  fontSize={{ md: "2xl", base: "lg", xl: "3xl" }}
                >
                  Education
                </Heading>
              </Flex>
              {/* Title Education End */}

              {/* Card Education Start */}
              <CardEducation
                uni='Universitas Pamulang'
                fieldOfStudy="Bachelor's degree, Informatics Engineering"
                year='2021 - Present'
                logo={logoUnpam}
                desc='Activity'
                activityPoint={[
                  <ListItem key={1}>
                    (MSIB Batch-5) Magang Merdeka at Emtek Group (PT. Abhimata
                    Citra Abadi - Mobile App Developer).
                  </ListItem>,
                  <ListItem key={1}>
                    (MSIB Batch-4) Studi Independent at LearningX "Essential
                    Programing Course" (Full Stack Web Developer).
                  </ListItem>,
                  <ListItem key={2}>
                    {" "}
                    Pengabdian Kepada Masyarakat (PKM) Student socialization
                    Ragam Modus Cyber Crime di Era Digital 4.0 2023.
                  </ListItem>,
                  <ListItem key={3}>
                    Pengabdian Kepada Masyarakat (PKM) Lecturer socialization
                    Penggunaan Google Form (MTs Mathlaul Anwar Pamulang) 2022.
                  </ListItem>,
                ]}
              />
              <CardEducation
                uni='Lx International - LearningX'
                fieldOfStudy='Essential Programming Course - Full Stack Web Development'
                year='February 2023 - June 2023'
                logo={logoLearningX}
                activity='Essential Programming Course [Studi Independent LearningX x Kampus Merdeka Batch 4], is course to become a full stack web developer, studying the entire website creation process from the front-end to the back-end. In this course I learned : 
          '
                desc='Activity'
                activityPoint={[
                  <ListItem key={1}>
                    About full stack web developer use Flask, MongoDb, Bootsrap,
                    Bulma, and JavaScript.
                  </ListItem>,
                  <ListItem key={2}>
                    Deploy website project using Glitch.
                  </ListItem>,
                  <ListItem key={3}>
                    Build the Nourish Connection website with the team for the
                    final project.
                  </ListItem>,
                ]}
              />
              {/* Card Education End */}
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Footer Start*/}
        {/* <FooterComponent /> */}
        {/* Footer End*/}
      </Box>
    </section>
  );
};

export default AboutMe;
