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

import CardEducation from "../Components/CardComponent";

import logoUnpam from "../assets/img/Logo Unpam 1.png";
import logoLearningX from "../assets/img/Logo LearningX.png";

import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EducationPage = () => {
  return (
    <section className='education-section' id='education'>
      <Box
        px={{ base: "5", xl: "20" }}
        py={{ base: "12", xl: "20" }}
        borderTop='2px'
        borderColor='gray.200'
      >
        {/* Title Education Start */}
        <Flex
          //   mt='10'
          // mx={{ md: "19", base: "1", xl: "20" }}
          alignItems='center'
        >
          <Icon
            as={FontAwesomeIcon}
            icon={faUserGraduate}
            boxSize={{ md: "27", base: "5", xl: "27" }}
            mr='2'
            color={useColorModeValue("fontColor.black", "primary.whiteDoff")}
          />
          <Heading
            color={useColorModeValue("fontColor.black", "primary.whiteDoff")}
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
              (MSIB Batch-5) Magang Merdeka at Emtek Group (PT. Abhimata Citra
              Abadi - Mobile App Developer).
            </ListItem>,
            <ListItem key={1}>
              (MSIB Batch-4) Studi Independent at LearningX "Essential
              programming Course" (Full Stack Web Developer).
            </ListItem>,
            <ListItem key={2}>
              {" "}
              Pengabdian Kepada Masyarakat (PKM) Student socialization Ragam
              Modus Cyber Crime di Era Digital 4.0 2023.
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
            <ListItem key={2}>Deploy website project using Glitch.</ListItem>,
            <ListItem key={3}>
              Build the Nourish Connection website with the team for the final
              project.
            </ListItem>,
          ]}
        />
        {/* Card Education End */}
      </Box>
    </section>
  );
};

export default EducationPage;
