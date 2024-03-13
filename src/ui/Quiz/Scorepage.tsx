import Link from "next/link";

type ScorePageProps = {
  score: number;
  title: string;
  numberOfQuestions: number;
};

const ScorePage = ({ title, score, numberOfQuestions }: ScorePageProps) => {
  return (
    <section className="px-6 sm:px-16 text-white flex items-center flex-col bg-slate-950 h-screen">
      <div className="w-full">
        <h2 className="text-[40px] font-extralight leading-none sm:text-[64px] text-center">
          Quiz completed
        </h2>
        <h3 className="text-[40px] font-medium leading-snug sm:text-[64px] text-center">
          You scored...
        </h3>
      </div>
      <div className="w-full flex flex-col items-center gap-3 text-white">
        <section className="mb-3 mt-10 flex flex-col items-center rounded-xl bg-slate-700 p-8 drop-shadow-sm dark:bg-navy sm:p-12 xl:mb-0 xl:mt-0 xl:w-[564px]">
          <div className="flex h-[72px] items-center justify-center">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center rounded-md p-2 bg-white">
                <img src={"/quiz-icon.jpg"} alt={title} className="h-20 w-14" />
              </div>
              <h1 className="text-[18px] font-medium sm:text-[28px]">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-[88px] font-medium sm:text-[144px] text-yellow-500">
              {score}
            </h4>
            <h5 className="text-lg font-light dark:text-lightBluish sm:text-2xl">
              out of {numberOfQuestions}
            </h5>
          </div>
        </section>
        <Link href={"/merchandise"}>
          <button className="hover:bg-yellow-500 h-14 w-full rounded-xl bg-yellow-500 py-2 text-[18px] font-medium text-white transition-all duration-200 ease-in-out sm:h-[92px] sm:rounded-3xl sm:text-[28px] xl:w-[564px]">
            Move to Merchandise
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ScorePage;
