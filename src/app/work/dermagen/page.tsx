import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/site/case-study-page";
import { caseStudies } from "@/lib/site-data";

const caseStudy = caseStudies.find((cs) => cs.slug === "dermagen")!;

export const metadata: Metadata = {
  title: caseStudy.meta?.title ?? `${caseStudy.shortName ?? caseStudy.client} Case Study`,
  description: caseStudy.meta?.description ?? caseStudy.story,
  alternates: {
    canonical: `/work/${caseStudy.slug}`,
  },
};

export default function DermaGenCaseStudyPage() {
  return <CaseStudyPage caseStudy={caseStudy} />;
}
