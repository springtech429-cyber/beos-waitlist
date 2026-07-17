import './Modules.css'

export default function Modules() {
  const categories = [
    {
      title: 'Design',
      icon: '✎',
      items: ['Architects', 'Interior Designers', 'Landscape Architects', 'Urban Planners'],
    },
    {
      title: 'Engineering',
      icon: '⚙',
      items: ['Structural', 'Civil', 'MEP', 'Geotechnical'],
    },
    {
      title: 'Visualization',
      icon: '◈',
      items: ['CAD Technicians', 'BIM Specialists', '3D Artists', 'Render Studios'],
    },
    {
      title: 'Construction',
      icon: '▤',
      items: ['Contractors', 'Quantity Surveyors', 'Project Managers', 'Site Supervisors'],
    },
    {
      title: 'Real Estate',
      icon: '▲',
      items: ['Developers', 'Property Investors', 'Estate Agencies', 'Asset Managers'],
    },
    {
      title: 'Supply Chain',
      icon: '⬡',
      items: ['Material Manufacturers', 'Furniture Brands', 'Window Suppliers', 'Roofing Companies'],
    },
    {
      title: 'Finance',
      icon: '◇',
      items: ['Banks', 'Mortgage Providers', 'Insurance Companies', 'Valuation Firms'],
    },
    {
      title: 'Government',
      icon: '◈',
      items: ['Planning Departments', 'Procurement Agencies', 'Regulatory Authorities', 'Municipal Bodies'],
    },
  ]

  return (
    <section  id='modules' className="section modules-section">
      <div className="modules-header">
        <span className="section-label">Who It Serves</span>
        <h2 className="section-title">Every Participant in the Built Environment</h2>
        <p className="section-subtitle">
          Not just architects. We serve the entire lifecycle of a building — from first sketch 
          to final inspection and beyond.
        </p>
      </div>
      <div className="modules-grid">
        {categories.map((cat, i) => (
          <div className="module-card" key={i}>
            <div className="module-card-icon">{cat.icon}</div>
            <h3 className="module-card-title">{cat.title}</h3>
            <ul className="module-card-list">
              {cat.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
