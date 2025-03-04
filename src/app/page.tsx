"use client";

import { api } from "@/trpc/react";

export default function Home() {
  const { data, isLoading, error } = api.congress.members.fetch.useQuery();

  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <div className="p-4 font-sans text-xl font-bold uppercase">
        The Price of Eggs is TOO DAMN HIGH
      </div>

      {isLoading && <p>Loading candidates data...</p>}

      {error && <p>Error loading data: {error.message}</p>}

      {data && (
        <div>
          {data.members.map((member) => (
            <div
              key={member.bioguideId}
              className="flex flex-row items-center justify-start p-4"
            >
              <div className="ml-4 flex flex-col items-start justify-start">
                <div className="text-lg font-bold">{member.name}</div>
                <div className="text-sm">
                  {member.partyName} - {member.state} ({member.district})
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
