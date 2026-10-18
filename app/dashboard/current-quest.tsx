"use client";

import { useState } from "react";
import { Check, Circle, Plus } from "lucide-react";
import { type } from "os";

type CurrentQuestProps = {
  id: number,
  title: string,
  description: string,
  completed: boolean,
};

export default function CurrentQuests({
  title,
}: CurrentQuestProps) {
  return(
    <section className="panel">
      <div className="stat-value">{title}</div>
    </section>
  )
}