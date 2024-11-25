import { Link } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { URL } from "url";
import { Result } from "../../../typings";

type Props = {
  searchParams: Promise<SearchParams>;
}

export type SearchParams = {
  url: URL;
  ss: string;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
}

async function SearchPage({ searchParams }: Readonly<Props>) {
  const params = await searchParams;
  if (!params.url) { return notFound(); }

  const results: Result = {
    content: {
      total_listings: "0",
      listings: []
    }
  };

  if (!results) { return notFound(); }

  return (
    <section>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <h1 className="text-4xl font-bold pb-3">Your Trip Results</h1>

        <h2 className="pb-3">
          Dates of trip:
          <span className="italic ml-2">{params.checkin} to {params.checkout}</span>
        </h2>

        <hr className="mb-5" />

        <h3 className="font-semibold text-xl">
          {results.content.total_listings}
        </h3>

        <div className="space-y-2 mt-5">
          {results.content.listings.map((item, i) => (
            <div
              key={i}
              className="flex space-y-2 justify-between space-x-4 p-5 border rounded-lg"
            >
              <Image
                src={item.url}
                alt="image of property"
                className="h-44 w-44 rounded-lg"
              />

              <div className="flex flex-1 space-x-5 justify-between">
                <div>
                  <Link
                    href={item.link}
                    className="font-bold text-[#f9812a] hover:text-[#f05e23] hover:underline"
                  >
                    {item.title}
                  </Link>
                  <p className="text-xs">{item.description}</p>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex items-start justify-end space-x-2 text-right">
                    <div>
                      <p className="font-bold">{item.rating_word}</p>
                      <p className="text-xs">{item.rating_count}</p>
                    </div>

                    <p className="flex items-center justify-center font-bold text-sm w-10 h-10 text-white bg-[#f05e23] rounded-lg flex-shrink-0">
                      {item.rating ?? "N/A"}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs">{item.booking_metadata}</p>
                    <p className="text-2xl font-bold">{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchPage;