import { useEffect, useState } from 'react'

export default function DynamicCheckboxes() {
  const DATA = [
    {
      id: 1,
      title: 'Enjoy studying English',
      AttributeValueList:[
        {
            AttibuteValueId:501
        },
        {
            AttibuteValueId:502
        }
      ],
   
    },
    {
      id: 2,
      title: 'Parlons français',
      AttributeValueList:[
        {
            AttibuteValueId:502
        },
        {
            AttibuteValueId:504
        }
      ],
    },
    {
      id: 3,
      title: 'Intermediate English',
      AttributeValueList:[
        {
            AttibuteValueId:500
        }
      ],
    },
    {
      id: 4,
      title: 'How to study French',
      AttributeValueList:[
        {
            AttibuteValueId:500
        }
      ],
    },
  ]

  const [filterTags, setFilterTags] = useState([])

  const filteredDATA = DATA.filter((node) =>
    filterTags.length > 0
      ? filterTags.every((filterTag) =>
          node.AttributeValueList.map((tag) => tag.AttibuteValueId).includes(parseInt(filterTag))
        )
      : DATA
  )
console.log(filteredDATA)

  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value])
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      )
    }
  }

  return (
    <>
      <div>
        <label htmlFor="english">
          <input
            type="checkbox"
            onChange={filterHandler}
            value="501"
            id="english"
          />
          <span>English</span>
        </label>
        <label htmlFor="french">
          <input
            type="checkbox"
            onChange={filterHandler}
            value="502"
            id="french"
          />
          <span>French</span>
        </label>
        <label htmlFor="kids">
          <input
            type="checkbox"
            onChange={filterHandler}
            value="502"
            id="kids"
          />
          <span>Kids</span>
        </label>
        <label htmlFor="adults">
          <input
            type="checkbox"
            onChange={filterHandler}
            value="504"
            id="adults"
          />
          <span>Adults</span>
        </label>
      </div>
      <ul>
        {filteredDATA.map((node) => (
          <li key={node.id}>{node.title}</li>
        ))}
      </ul>
    </>
  )
}