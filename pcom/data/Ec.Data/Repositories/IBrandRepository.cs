using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Data.Repositories
{
    public interface IBrandRepository
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CategoryIdList { get; set; }
    }
}
