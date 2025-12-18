import Link from "next/link";

export default function SectionHeading({ title, linkText, link }:any) {
  return (
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-3xl font-semibold">{title}</h2>

      {link && (
        <Link href={link} className="text-sm text-red-500 hover:underline">
          {linkText}  
        </Link>
      )}
    </div>
  );
}
