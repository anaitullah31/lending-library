import Link from "next/link";

export default function MembershipSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16 text-center">
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 leading-tight">
          Become a Guardian of Knowledge
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-7 mb-8">
          Members gain exclusive access to private reading rooms, first-look
          privileges for special collections, and invitations to literary galas.
        </p>

        <Link
          href="/login"
          className="inline-block w-full sm:w-auto bg-white border border-black hover:bg-black text-black hover:text-white uppercase tracking-widest text-xs font-bold px-6 sm:px-10 py-4 transition"
        >
          Become a Member
        </Link>
      </div>
    </section>
  );
}