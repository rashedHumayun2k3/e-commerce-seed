using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Data.Entities
{
    public class Categories: BaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ParentId { get; set; }
        public string Code { get; set; }
    }
    public class RouteParamsModel
    {
        public string[] BrandOrCategory { get; set; }
        public string SearchAttribute { get; set; }
        public string FormType { get; set; }
        public string AerviceName { get; set; }
        public string Rating { get; set; }
        public string Location { get; set; }
        public string Price { get; set; }
        public string Author { get; set; }
    }
}
