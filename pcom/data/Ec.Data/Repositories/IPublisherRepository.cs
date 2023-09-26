using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Data.Repositories
{
    public interface IPublisherRepository
    {
		Task<IEnumerable<Publisher>> GetAll();
		Task<Publisher> GetById(int id);
	}
}
