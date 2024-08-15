import { Timeline } from "antd";
import MyButton from "../../ui/button";

export default function EndingSagara() {
  return (
    <section className="flex flex-col gap-8 items-center justify-center mt-8 px-4 md:px-0">
      <div className="flex flex-col items-center gap-4">
        <hr className="w-20 h-1 rounded-full bg-[#A51535]" />
        <h1 className="text-[#A51535] text-2xl text-center">
          Empower Yourself With
          <br />
          <span className="font-bold">Our Certification</span>
        </h1>
      </div>
      <div class="max-w-7xl mx-auto">
        <div class="flex gap-4 flex-col md:flex-row mb-8">
          <button class="px-4 flex-1 py-2 text-sm md:text-md font-semibold text-white bg-[#A51535] rounded-lg">
            FRONT END DEVELOPER
          </button>
          <button class="px-4 flex-1 py-2 text-sm md:text-md font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg">
            BACK END DEVELOPER
          </button>
          <button class="px-4 flex-1 py-2 text-sm md:text-md font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg">
            QUALITY ASSURANCE
          </button>
          <button class="px-4 flex-1 py-2 text-sm md:text-md font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg">
            UI/UX DESIGN
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="./../Rectangle 7.png"
              alt="Code Image"
              class="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 class="text-3xl font-bold text-[#A51535] mb-4">
              Front End Certification
            </h2>
            <p class="text-gray-700 mb-4">
              This program equips you with the essential skills and knowledge to
              create visually appealing websites or applications.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 shadow flex items-center justify-center">
                  <img
                    src="./../Group 72.png"
                    alt="Icon 2"
                    class="w-4 h-4 text-white"
                  />
                </div>
                <span class="text-gray-700">
                  This program equips you with essential skills and knowledge to
                  create visuality appealing websites or applications
                </span>
              </li>
              <li class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 shadow flex items-center justify-center">
                  <img
                    src="./icon1.svg"
                    alt="Icon 1"
                    class="w-4 h-4 text-white"
                  />
                </div>
                <span class="text-gray-700">
                  Evaluates your proficiency in frontend programming languages
                  and other relevant frontend technologies.
                </span>
              </li>
              <li class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 shadow flex items-center justify-center">
                  <img
                    src="./icon2.svg"
                    alt="Icon 2"
                    class="w-4 h-4 text-white"
                  />
                </div>
                <span class="text-gray-700">
                  Gain recognition as a qualified frontend developer, enhance
                  your career prospects, and open doors to exciting job
                  opportunities.
                </span>
              </li>
            </ul>
            <div class="mt-8 flex justify-center">
              <MyButton className="px-12 py-2">Get Detail</MyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
