import Link from "next/link";

export default function MembershipSection() {
  return (
    <section className="bg-[#062b50] py-20 px-4">
      <div className="max-w-7xl mx-auto bg-[#000000]/60 py-16 px-6 text-center">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
          Become a Guardian of Knowledge
        </h2>

        <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8">
          Members gain exclusive access to private reading rooms, first-look
          privileges for special collections, and invitations to literary galas.
        </p>

        <Link href="/login" className="bg-white border hover:bg-black text-[#000000] hover:text-white hover:border-white uppercase tracking-widest text-xs font-bold px-10 py-4 transition">
          Become a Member
        </Link>
      </div>
    </section>
  );
}
