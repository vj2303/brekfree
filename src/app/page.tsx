import Image from "next/image";
import Button from "@/components/UI/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="ml-[200px]">
        <h1 className="font-bold text-[60px]">Welcome, Riya</h1>
        <p className="text-[20px]">Select an Option to Proceed</p>
        <div className="flex mt-[50px] justify-between gap-[128px]">
            <div className="flex flex-col items-center group">
                <Link href={'/create'}>
                  <div className="border px-[77px] pt-[10px] rounded-xl transition-all duration-300 hover:border-gray-800 hover:border-[2px] hover:shadow-md">
                    <Image 
                      src={'/AI-trainer.png'} 
                      alt="AI for Trainers" 
                      width={287} 
                      height={287} 
                      className=""
                    />
                  </div>
                  <h3 className="text-[30px] font-bold text-center mt-4 group-hover:text-[34px] group-hover:text-gray-900 transition-all duration-300">
                    AI for Trainers
                  </h3>
                </Link>
            </div>

            <div className="flex flex-col items-center group">
                <div className=" border px-[74px] py-[13px] rounded-xl transition-all duration-300 hover:border-gray-800 hover:border-[2px] hover:shadow-md">
                  <Image 
                    src={'/AI-report.png'} 
                    alt="AI Powered Report Generation" 
                    width={287} 
                    height={287} 
                    className="group-hover:brightness-75 transition-all duration-300"
                  />
                </div>
                <h3 className="text-[30px] font-bold text-center mt-4 group-hover:text-[34px] group-hover:text-gray-900 transition-all duration-300">
                  AI Powered Report Generation
                </h3>
            </div>


        </div>
        {/* <div className='mt-[32px] flex justify-center'>
        <Button bg={"dark-blue"} text='white'>
          Continue
          <Image src={"/Vector.png"} alt='star' width={20} height={20} />
        </Button>
      </div> */}
    </div>
  );
}
