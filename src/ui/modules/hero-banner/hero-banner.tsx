'use client'
import { Buttons } from "@/ui/components/buttons/buttons"
import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/components/typography/typography"
import Image from "next/image"
import LandingPageCover from '../../../../public/images/landing_page_cover.png'

export const HeroBanner = () => {

  return(
    <Container className="flex flex-col px-6 h-[90vh] gap-2 pt-1">
      <Container className="basis-6/7 rounded">
        <Container className="z-[-1] border-r-2 fixed bg-accent w-auto h-auto">
          m
          {/* <Image
            src={LandingPageCover} 
            alt="hotel's bedroom"
            fill={true}
            className="object-cover"
          /> */}
        </Container>
        <Container className="">
          <Typography variant="title-lg" component="h1">Main</Typography>
        </Container>
      </Container>
      <Container className="basis-1/7 bg-secondary-Default">
        <Typography variant="title-lg" component="h1">sub</Typography>
      </Container>
    </Container>
  )
}