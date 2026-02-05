export default function Skills() {
  return (
    <section id="skills" className="space-y-3">
      <h2 className="text-xl font-semibold">Skills</h2>

      <div className="space-y-2 text-sm">
        <div>
          <p className="font-medium">Frontend</p>
          <p className="text-gray-600">React.js / Next.js / TypeScript / JavaScript / HTML / CSS / Tailwind CSS</p>
        </div>
        <div>
          <p className="font-medium">Backend</p>
          <p className="text-gray-600">Express / FastAPI / MySQL / PostgreSQL</p>
        </div>
        <div>
          <p className="font-medium">ORM</p>
          <p className="text-gray-600">SQLAlchemy / Prisma</p>
        </div>
        <div>
          <p className="font-medium">インフラ・その他</p>
          <p className="text-gray-600">Docker / Firebase Authentication / Git / GitHub / AWS（S3 / EC2 / Lambda）</p>
        </div>
      </div>
    </section>
  );
}