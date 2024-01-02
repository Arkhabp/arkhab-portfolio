import { useEffect, useState } from "react";
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

import profileImage from "../assets/img/profile.png";
import Lottie from "lottie-react";
import catAnimation from "../assets/json/catAnimation.json";

import {
  faSquareInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLink, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion, AnimatePresence } from "framer-motion";

import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

const AboutMe = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className='App-header' id='about-me'>
      {/* Navabar Start */}
      {/* <NavbarComponent /> */}
      {/* Navabar End */}

      <Box>
        <AnimatePresence>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Biodata Card Start */}

            <Box
              px={{ base: "5", xl: "20" }}
              py={{ base: "10", xl: "20" }}
              bg='white.500'
            >
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
                    width={{
                      md: "100%",
                      xl: "100%",
                      // md: "100%"
                    }}
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
                        <Flex
                          justify='space-between'
                          alignItems='center'
                          // bg='black'
                          w='100%'
                          direction={{ base: "column", xl: "row" }}
                        >
                          <Flex gap='2' mb='5'>
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
                          <Lottie
                            animationData={catAnimation}
                            style={{
                              width: dimensions.width < 768 ? "80px" : "120px",
                              height: dimensions.width < 768 ? "80px" : "120px",
                            }}
                            loop
                            autoplay
                          />
                        </Flex>
                      </CardFooter>
                    </Stack>
                  </Card>
                </Flex>
              </AnimatedWrapper>
              {/* Biodata Card End */}

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
