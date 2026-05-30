"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import HeadingAccent from "@/components/shared/HeadingAccent";
import type { CollectionConfig, CollectionItem } from "@/lib/resourceCollections";

const ItemCard = ({ item, index }: { item: CollectionItem; index: number }) => {
  const inner = (
    <div
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-5 ring-1 ring-black/5 transition-shadow hover:shadow-lg"
      style={{ background: "linear-gradient(155deg, #ffffff 0%, #f7f4ec 100%)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground">
          {item.meta}
        </p>
        {item.tag && (
          <span className="shrink-0 rounded-full bg-foreground px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-white">
            {item.tag}
          </span>
        )}
      </div>
      <h3 className="mt-2 font-serif text-lg leading-snug text-foreground">{item.title}</h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
      {item.href && (
        <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs font-medium text-foreground transition-colors group-hover:text-primary">
          View <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      {item.href ? (
        <Link href={item.href} data-cursor="pointer" className="block h-full">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </motion.div>
  );
};

const ResourceCollection = ({ config }: { config: CollectionConfig }) => {
  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/resources"
          data-cursor="pointer"
          className="mb-6 inline-flex items-center gap-1.5 font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Resources
        </Link>

        <PageHeader label={config.label} description={config.description} align="left">
          {config.title}{" "}
          <HeadingAccent variant="singleCurve" color={config.accentColor}>
            {config.accentWord}
          </HeadingAccent>
        </PageHeader>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {config.items.map((item, i) => (
            <ItemCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCollection;
