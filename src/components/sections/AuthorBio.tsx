import Image from "next/image";
import Link from "next/link";

export default function AuthorBio() {
  return (
    <section className="py-14 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ridge-50 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                <Image
                  src="/images/shirin-abplanalp.jpg"
                  alt="Shirin Abplanalp, founder of INW Basecamp"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-pine-600 mb-1">
                Written by
              </p>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                Shirin Abplanalp
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Shirin is the founder of INW Basecamp and a relocation guide for
                the Inland Northwest. Originally from San Diego, she&apos;s lived
                across the American West — from Bend, Oregon to Austin, Mesa, and
                the Pacific Northwest — before she and her husband chose Coeur
                d&apos;Alene as their permanent basecamp. She created INW Basecamp
                to be the honest, experience-based resource she wished existed
                when they made the move. When she&apos;s not helping people
                navigate their relocation, you&apos;ll find her exploring the
                trails, lakes, and small towns of Northern Idaho with their rescue
                dog Roxy.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 bg-pine-600 text-white text-sm font-semibold rounded-lg hover:bg-pine-700 transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center px-4 py-2 bg-white text-slate-700 text-sm font-semibold rounded-lg border border-slate-200 hover:border-pine-300 hover:text-pine-700 transition-colors"
                >
                  More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
