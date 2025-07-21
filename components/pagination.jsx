"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base">
  <Button
    variant="outline"
    size="icon"
    onClick={() =>  onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="w-8 h-8 sm:w-9 sm:h-9"
  >
    <ChevronLeft className="h-4 w-4" />
  </Button>
  <span className="text-xs sm:text-sm">
    Page {currentPage} of {totalPages}
  </span>
  <Button
    variant="outline"
    size="icon"
    onClick={() => onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="w-8 h-8 sm:w-9 sm:h-9"
  >
    <ChevronRight className="h-4 w-4" />
  </Button>
</div>

  );
}
