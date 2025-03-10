import ImageWithText from "@/components/layout/ImageWithText";
import banner from "public/images/banner-1.png";
import about from "public/images/about.png";

export default function AboutPage() {
    return (
        <main className='flex flex-col gap-4'>
            <div className='relative w-full'>
                <ImageWithText fullSize src={banner} />
            </div>
            <div className='relative w-full'>
                <ImageWithText fullSize src={about} />
            </div>
        </main>
    )
}