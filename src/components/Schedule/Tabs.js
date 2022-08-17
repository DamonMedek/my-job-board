import { useState } from "react";
import { Tab } from "@headlessui/react";
import ClientForm from "./ClientForm";
import CalMonth from "./CalMonth";
import CalDay from "./CalDay";
import JobForm from "./JobForm";
import Invoice from "./Invoice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    Personal: [
      {
        id: 1,
        form: <ClientForm />,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Day: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        form: <CalMonth />,
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
    ],
    Job: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        form: <JobForm />,
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
    ],
    Time: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        form: <CalDay />,
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
    ],
    Pay: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        form: <Invoice />,
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
    ],
  });

  return (
    <div className="w-full max-w-md] px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex md:w-2/3 m-auto space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected ? "bg-white shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              {posts.map((post) => (
                <>{post.form}</>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
