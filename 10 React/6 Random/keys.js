// Keys help React identify which items have changed, are added, or are removed. 
// Keys should be given to the elements inside the array to give the elements a stable identity:

<ul>
      {mockData.map(({ id, name, email }) => (
        <li key={id}>
          Name: <strong>{name}</strong>
          <br />
          Email: <strong>{email}</strong>
          <br /><br />
        </li>
      ))}
    </ul>


// For example, if we have render 1 and render 2 (R1 and R2) 
// and 3 list items in R1 but only 2 list items in R2, ie one item gets deleted:
        // R1      R2
        // Li      Li
        // Li      Li
        // Li      

// How does React know which Li was deleted from R1 to give us R2?
// Was it the first, second or third? We know one is definitely missing.
// Giving it an id ensures React can remove the right list item
