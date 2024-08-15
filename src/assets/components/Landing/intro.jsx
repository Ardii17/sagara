import MyButton from "../../ui/button";

export default function Intro() {
  return (
    <section
      className="flex text-white px-4 md:px-24 items-center w-full bg-cover bg-no-repeat bg-center min-w-full h-96 aspect-video"
      style={{ backgroundImage: "url('./../Rectangle 7.jpg')" }}
    >
      <div className="w-4/5 md:w-2/5 flex flex-col gap-2">
        <p className="font-semibold text-4xl">
          Live <span className="font-bold">Your Best</span> Life <br /> Using{" "}
          <span className="font-bold">Your Strengths</span>
        </p>
        <p>
          Meet some of the people who have completed the Sagara Technology and
          use their result to maximize their potential at work and everywhare
          else
        </p>
        <MyButton className="max-w-52 mt-8 py-4">Get Certification</MyButton>
      </div>
    </section>
  );
}
