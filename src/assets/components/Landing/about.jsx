export default function About() {
  return (
    <section className="flex items-center flex-col md:flex-row justify-center min-h-96 px-4 md:px-0">
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 gap-4 w-2/6">
        <hr className="w-[80px] h-1 bg-gray-900 rounded-full" />
        <h2 className="font-bold">ABOUT US</h2>
      </div>
      <div className="w-full md:w-4/6 flex flex-col gap-4">
        <p className="font-semibold text-xl text-[#A51535]">
          SAGARA IT CERTIFICATION
        </p>
        <p className="font-semibold text-3xl text-gradient">
          Join thousands of professionals who have elevated their skills and
          carved out success in the technology industry. Start your journey to
          excellence with us today!
        </p>
        <p className="opacity-50">
          Boost your career prospects in the digital era with
          industry-recognized information technology certifications from Sagara
          IT Certification.
        </p>
      </div>
    </section>
  );
}
