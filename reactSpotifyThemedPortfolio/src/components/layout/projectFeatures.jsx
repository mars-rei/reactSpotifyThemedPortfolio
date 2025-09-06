const ProjectFeatures = ({ items }) => {
  return (
    <div className="space-y-3 text-sm text-faded">
      {items && (
        <ul className="list-disc ml-6">
          {items.map((item, index) => {
            if (typeof item === 'string') {
              return (
                <li key={index}>
                  {item}
                </li>
              );
            } else if (item.subItems) {
              return (
                <li key={index}>
                  {item.item}
                  <ul className="list-disc ml-6">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
    </div>
  );
};

export default ProjectFeatures;