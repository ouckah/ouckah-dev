import { motion } from "motion/react";
import { Section } from "@/components/section";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";

export default function AidanPage() {
  return (
    <>
      <Separator className="my-4" />
      <Section 
        fullHeight 
        className="items-center justify-center"
      >
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="text-center flex flex-col items-center justify-center"
        >
          <Card>
            <CardHeader />
            <CardContent className="flex flex-col justify-center items-center">
              <motion.img
                className="rounded-full mb-4"
                src="https://media.licdn.com/dms/image/v2/D4E03AQEmTjOtlP-bow/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722921060373?e=2147483647&v=beta&t=XglBABoFXGr-6Kzj8RzyYtn97aFUwoXW3iLgOgP0hz0" 
                alt="@pfp" 
              />
              <h2 className="text-3xl font-bold mb-4">Aidan Ouckama</h2>
              <p className="text-xl mb-6">CS @ Stevens</p>
              <p className="text-lg">
                My name is Aidan and I love computer science. <br/>
                Technology has always intrigued me since I was young,
                leading me down a roadmap from <span className="font-semibold">robotics</span> to <span className="font-semibold">game development</span> to <span className="font-semibold">web development</span>.
                I&apos;m excited to see where technology will end up and where it will lead me.
              </p>
            </CardContent>
            <CardFooter />
          </Card>
        </motion.div>
      </Section>
      <Separator className="my-4" />
      <Section>
        <h2 className="text-2xl font-bold ml-6 mb-10">Education</h2>
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="text-center flex flex-col gap-8 items-center justify-center sm:flex-row"
        >
          <Card>
            <CardHeader />
            <CardContent className="flex flex-col justify-center items-center min-w-1/2">
              <motion.img
                className="rounded-full mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTBIdBDIJ4zWFNBSdDOt9tqNHa3mnqcLN_A&s"
                alt="@pfp" 
              />
              <h2 className="text-3xl font-bold mb-4">Stevens Institute of Technology</h2>
              <p className="text-xl mb-6">Computer Science, Minor in Mathematics</p>
              <p className="text-lg italic mb-6">September 2022</p>
            </CardContent>
            <CardFooter />
          </Card>
        </motion.div>
      </Section>
      <Separator className="my-4" />
      <Section>
        <h2 className="text-2xl font-bold ml-6 mb-10">Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24">
        <motion.div
          initial={{ y: -300, opacity: 0, z: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -40, z: 1 }}
          transition={{
            y: { duration: 0.75 },
            opacity: { duration: 0.75 },
            default: { ease: "easeInOut" }, // Applies easing to `y` and `opacity`
          }}
          className="text-center flex flex-col gap-2 items-center justify-center sm:flex-row"
        >
            <Card>
              <CardHeader />
              <CardContent className="flex flex-col justify-center items-center min-w-96">
                <motion.img
                  className="rounded-full mb-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTBIdBDIJ4zWFNBSdDOt9tqNHa3mnqcLN_A&s"
                  alt="@pfp" 
                />
                <h2 className="text-3xl font-bold mb-4">Microsoft</h2>
                <p className="text-xl mb-6">Incoming Software Engineer Intern</p>
                <p className="text-lg italic mb-6">May 2025</p>
              </CardContent>
              <CardFooter />
            </Card>
          </motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0, z: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -40, z: 1 }}
            transition={{
              y: { duration: 0.75 },
              opacity: { duration: 0.75 },
              default: { ease: "easeInOut" }, // Applies easing to `y` and `opacity`
            }}
            className="text-center flex flex-col gap-2 items-center justify-center sm:flex-row"
          >
            <Card>
              <CardHeader />
              <CardContent className="flex flex-col justify-center items-center min-w-96">
                <motion.img
                  className="rounded-full mb-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTBIdBDIJ4zWFNBSdDOt9tqNHa3mnqcLN_A&s"
                  alt="@pfp" 
                />
                <h2 className="text-3xl font-bold mb-4">Datadog</h2>
                <p className="text-xl mb-6">Software Engineer Intern</p>
                <p className="text-lg italic mb-6">September 2024</p>
              </CardContent>
              <CardFooter />
            </Card>
          </motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0, z: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -40, z: 1 }}
            transition={{
              y: { duration: 0.75 },
              opacity: { duration: 0.75 },
              default: { ease: "easeInOut" }, // Applies easing to `y` and `opacity`
            }}
            className="text-center flex flex-col gap-2 items-center justify-center sm:flex-row"
          >
            <Card>
              <CardHeader />
              <CardContent className="flex flex-col justify-center items-center min-w-96">
                <motion.img
                  className="rounded-full mb-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTBIdBDIJ4zWFNBSdDOt9tqNHa3mnqcLN_A&s"
                  alt="@pfp" 
                />
                <h2 className="text-3xl font-bold mb-4">DoorDash</h2>
                <p className="text-xl mb-6">Software Engineer Intern</p>
                <p className="text-lg italic mb-6">May 2024</p>
              </CardContent>
              <CardFooter />
            </Card>
          </motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0, z: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -40, z: 1 }}
            transition={{
              y: { duration: 0.75 },
              opacity: { duration: 0.75 },
              default: { ease: "easeInOut" }, // Applies easing to `y` and `opacity`
            }}
            className="text-center flex flex-col gap-2 items-center justify-center sm:flex-row"
          >
            <Card>
              <CardHeader />
              <CardContent className="flex flex-col justify-center items-center min-w-96">
                <motion.img
                  className="rounded-full mb-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTBIdBDIJ4zWFNBSdDOt9tqNHa3mnqcLN_A&s"
                  alt="@pfp" 
                />
                <h2 className="text-3xl font-bold mb-4">Stanford University</h2>
                <p className="text-xl mb-6">Teaching Assistant</p>
                <p className="text-lg italic mb-6">April 2024</p>
              </CardContent>
              <CardFooter />
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  )
}