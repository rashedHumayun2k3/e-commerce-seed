using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Data.Entities
{
    public class CategoryAttributes: BaseEntity
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public int AttributeId { get; set; }
        public string AttributeName { get; set; } = string.Empty;
        public string AttributeValue { get; set; } = string.Empty;
        public bool IsRequired { get; set; }
    }
 
}
