export default function WhySagara() {
  return (
    <section className="flex gap-8 items-center px-4 md:px-0 mt-4 md:mt-0">
      <div className="w-full flex flex-col gap-4 items-start md:w-1/2">
        <h2 className="font-bold text-[#A51535] text-2xl mb-4">
          WHY SAGARA IT CERTIFICATION?
        </h2>
        <div className="flex gap-4 justify-start">
          <div className="min-w-12 w-12 min-h-12 h-12 rounded bg-[#F6E8EB]">
            <img src="./Frame 13.svg" alt="Frame 13" />
          </div>
          <div className="flex flex-col">
            <h6 className="font-semibold text-lg">Global Credibility Boost</h6>
            <p>
              Our certifications are globally recognized, enhancing your credibility, and opening doors to new opportunities.
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-start">
          <div className="min-w-12 w-12 min-h-12 h-12 rounded bg-[#F6E8EB]">
            <img src="./Frame 13-1.svg" alt="Frame 13" />
          </div>
          <div className="flex flex-col">
            <h6 className="font-semibold text-lg">Empowering Careers</h6>
            <p>
              Equipped to advance your career, secure promotions, and pursue new job opportunities in the ever-evolving tech industry. 
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-start">
          <div className="min-w-12 w-12 min-h-12 h-12 rounded bg-[#F6E8EB]">
            <img src="./Frame 14.svg" alt="Frame 13" />
          </div>
          <div className="flex flex-col">
            <h6 className="font-semibold text-lg">Expertise Validation</h6>
            <p>
              Showcase your expertise and validate your skills with globally recognized certifications that employers trust.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden md:block">
        <img src="./../image.png" alt="Why Sagara IT CERTIFICATION" />
      </div>
    </section>
  );
}