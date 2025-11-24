import React from "react"

export const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-slate-200 ${className || ""}`} />
)

export const ExperienceSkeleton = () => (
  <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm mb-8">
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <Skeleton className="w-16 h-16 rounded-2xl shrink-0" />
      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
          <div className="space-y-2">
            <Skeleton className="h-8 w-48 rounded-lg" />
            <Skeleton className="h-5 w-32 rounded-lg" />
          </div>
          <Skeleton className="h-8 w-32 rounded-full" />
        </div>
        <div className="space-y-3 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-start">
               <Skeleton className="w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0" />
               <Skeleton className="h-4 w-full max-w-xl rounded" />
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
             <React.Fragment key={i}>
                <Skeleton className="h-6 w-16 rounded-full" />
             </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export const ProjectSkeleton = () => (
  <div className="flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden h-full">
    <div className="h-32 bg-slate-100 p-6 flex justify-between items-start animate-pulse">
      <div className="w-12 h-12 bg-slate-200 rounded-xl" />
      <div className="w-20 h-6 bg-slate-200 rounded-full" />
    </div>
    <div className="p-6 flex-1 flex flex-col space-y-4">
      <Skeleton className="w-3/4 h-7 rounded" />
      <div className="space-y-2">
         <Skeleton className="w-full h-4 rounded" />
         <Skeleton className="w-5/6 h-4 rounded" />
      </div>
      <div className="flex gap-2 pt-2">
         <Skeleton className="w-12 h-6 rounded" />
         <Skeleton className="w-12 h-6 rounded" />
         <Skeleton className="w-12 h-6 rounded" />
      </div>
      <div className="pt-2 mt-auto">
         <Skeleton className="w-full h-12 rounded-xl" />
      </div>
    </div>
  </div>
)