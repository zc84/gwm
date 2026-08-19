"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Locale } from "@gwm/shared";
import type { BrandGroup, ModelStatus } from "../../../lib/content/models";
import { getModelThumbnail } from "../../../lib/content/models";

type BrandRangeFilterProps = {
  locale: Locale;
  brandGroups: BrandGroup[];
  filterLabel: string;
  allOption: string;
  viewDetailsLabel: string;
  bookTestDriveLabel: string;
  statusLabels: Record<ModelStatus, string>;
};

export function BrandRangeFilter({
  locale,
  brandGroups,
  filterLabel,
  allOption,
  viewDetailsLabel,
  bookTestDriveLabel,
  statusLabels,
}: BrandRangeFilterProps) {
  const [selectedBrand, setSelectedBrand] = useState("all");

  const visibleGroups = useMemo(
    () =>
      selectedBrand === "all"
        ? brandGroups
        : brandGroups.filter((group) => group.brand === selectedBrand),
    [brandGroups, selectedBrand],
  );

  return (
    <div className="flex flex-col gap-10">
      <label className="flex flex-wrap items-center gap-3 text-xs font-black uppercase text-gwm-muted">
        {filterLabel}
        <select
          value={selectedBrand}
          onChange={(event) => setSelectedBrand(event.target.value)}
          className="border border-gwm-line bg-gwm-panel px-3 py-2 text-xs font-black uppercase text-white"
        >
          <option value="all">{allOption}</option>
          {brandGroups.map((group) => (
            <option key={group.brand} value={group.brand}>
              {group.brand}
            </option>
          ))}
        </select>
      </label>

      {visibleGroups.map((group) => (
        <div key={group.brand}>
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-gwm-line pb-3">
            <h3 className="text-xl font-black text-white">{group.brand}</h3>
            <p className="gwm-caption">{group.tagline}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.models.map((entry) => {
              const thumbnail = getModelThumbnail(entry.name);
              return (
                <article
                  key={entry.name}
                  className="border border-gwm-line bg-gwm-panel p-4"
                >
                  {thumbnail ? (
                    <div
                      className="-mx-4 -mt-4 mb-4 aspect-[4/3] gwm-media-fade bg-cover bg-center"
                      role="img"
                      aria-label={`${entry.name} exterior shot`}
                      style={{ backgroundImage: `url(${thumbnail})` }}
                    />
                  ) : null}
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-lg font-black text-white">{entry.name}</h4>
                    <span className="whitespace-nowrap text-[10px] font-black uppercase text-gwm-muted">
                      {statusLabels[entry.status]}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-bold uppercase text-gwm-red">
                    {entry.segment}
                  </p>
                  <p className="mt-3 text-sm font-bold text-white">{entry.tagline}</p>
                  <p className="gwm-copy mt-2 text-sm">{entry.intro}</p>
                  <div className="mt-5">
                    {entry.slug ? (
                      <Link
                        href={`/${locale}/vehicles/${entry.slug}`}
                        className="border-b border-gwm-red pb-1 text-xs font-black uppercase text-white"
                      >
                        {viewDetailsLabel}
                      </Link>
                    ) : (
                      <Link
                        href={`/${locale}/forms`}
                        className="border-b border-gwm-red pb-1 text-xs font-black uppercase text-white"
                      >
                        {bookTestDriveLabel}
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
