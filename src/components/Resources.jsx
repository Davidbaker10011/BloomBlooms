import ResourceCard from "./ResourceCard";

function Resources() {
  return (
    <section className="resources-section" id="resources">
      <div className="section-container">
        <p className="section-label">Legal Resources</p>

        <h2>Find the Help You Need</h2>

        <p className="section-intro">
          Explore information and resources designed to help you understand
          your rights and navigate the justice system.
        </p>

        <div className="resource-grid">
          <ResourceCard
            title="Know Your Rights"
            description="Learn about constitutional rights, police encounters, searches, arrests, and due process."
            href="#know-your-rights"
          />

          <ResourceCard
            title="Court Resources"
            description="Find information about court procedures, filings, hearings, and preparing for court."
          />

          <ResourceCard
            title="Legal Assistance"
            description="Find legal aid organizations, attorneys, advocacy groups, and other sources of legal help."
          />

          <ResourceCard
            title="Public Records"
            description="Learn how to request government records and understand public-records laws."
          />

          <ResourceCard
            title="Housing Rights"
            description="Explore information involving tenants, landlords, evictions, housing disputes, and housing assistance."
          />

          <ResourceCard
            title="Family & Juvenile Court"
            description="Access general resources involving custody, visitation, child support, and juvenile court proceedings."
          />
        </div>
      </div>
    </section>
  );
}

export default Resources;
