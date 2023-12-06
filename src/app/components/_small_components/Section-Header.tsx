export default function SectionHeader({ text }: { text: string }) {
  return (
    <>
      <h3
        className="
            xl:text-[60px] text-[40px] md:text-[50px] font-bold text-orange-100  
          "
      >
        {`<${text} />`}
      </h3>
    </>
  );
}
