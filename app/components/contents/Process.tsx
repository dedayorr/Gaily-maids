import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Process = () => {
  return (
    <>
      <div className="mx-[5%] flex flex-col gap-[15px]">
        <h2 className="text-[25px] font-semibold leading-8 text-[#823ec9]">
          How a clean house impacts your life
        </h2>
        <p className="leading-8 text-justify">
          A clean house has a significant impact on various aspects of your
          life. Here are several ways in which maintaining a clean living
          environment can positively influence your overall well-being:
        </p>

        <div className="flex flex-col gap-[5px]">
          <h3 className="font-bold text-[20px] text-[#293b6cf8] ">
            Improves Mental Health:
          </h3>
          <ol className="list-disc mx-[5%]">
            <li className="leading-8 text-justify ">
              <span className="font-bold">Reduces Stress and Anxiety: </span>
              Clutter and mess can be visually overwhelming and mentally
              exhausting. A clean and organized space promotes a sense of calm
              and order, which can reduce stress and anxiety levels.
            </li>
            <li className="leading-8 text-justify ">
              <span className="font-bold">
                Enhances Focus and Productivity:{" "}
              </span>
              A tidy environment allows you to concentrate better on tasks
              without the distraction of clutter. This can lead to increased
              productivity and efficiency in daily activities.
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-[5px]">
          <h3 className="font-bold text-[20px] text-[#293b6cf8] ">
            Promotes Physical Health:
          </h3>
          <ol className="list-disc mx-[5%]">
            <li className="leading-8 text-justify ">
              <span className="font-bold">
                Reduces Allergens and Bacteria:{" "}
              </span>
              Regular cleaning helps eliminate dust, pet dander, mold, and other
              allergens that can trigger respiratory issues and allergies. It
              also reduces the presence of bacteria and viruses, decreasing the
              risk of infections and illnesses.
            </li>
            <li className="leading-8 text-justify ">
              <span className="font-bold">Encourages Physical Activity:</span>
              The act of cleaning itself is a form of physical exercise.
              Activities such as vacuuming, mopping, and scrubbing can help burn
              calories and keep you active.
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-[5px]">
          <h3 className="font-bold text-[20px] text-[#293b6cf8] ">
            Enhances Emotional Well-Being:
          </h3>
          <ol className="list-disc mx-[5%]">
            <li className="leading-8 text-justify ">
              <span className="font-bold">Boosts Mood: </span>A clean and
              organized home can create a sense of accomplishment and
              satisfaction, boosting your overall mood and emotional state.
            </li>
            <li className="leading-8 text-justify ">
              <span className="font-bold">Promotes Relaxation:</span>
              An orderly environment is more conducive to relaxation and
              leisure. It allows you to unwind and enjoy your personal space
              without the constant reminder of chores left undone.
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-[5px]">
          <h3 className="font-bold text-[20px] text-[#293b6cf8] ">
            Improves Sleep Quality:
          </h3>
          <ol className="list-disc mx-[5%]">
            <li className="leading-8 text-justify ">
              <span className="font-bold">Creates a Restful Environment: </span>
              A clean and clutter-free bedroom is more conducive to restful
              sleep. Fresh linens, a tidy room, and a clean environment
              contribute to better sleep quality, which is crucial for overall
              health.
            </li>
          </ol>
        </div>
      </div>

      <div className="mx-[5%] flex flex-col gap-[15px]">
        <h2 className="text-[25px] font-semibold leading-8 text-[#823ec9]">
          Our Cleaning Process
        </h2>
        <p className=" text-[20px] font-medium">Full Service House Cleaning</p>
        <div className="leading-8 text-justify">
          When you're balancing a busy family life, long hours at the office,
          and other important aspects of your weekly routine, finding time to
          keep your house in order can be difficult. Even though life gets busy,
          coming home should never be a chore – and with Merry Maids, it won’t
          be.
        </div>
        <Link
          href=""
          className="text-[18px] text-[#823ec9] flex items-center gap-[10px]"
        >
          <p className="italic underline">See More</p>
          <FaArrowRight />
        </Link>
      </div>
    </>
  );
};

export default Process;
