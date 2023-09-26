using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Data.Repositories
{
    public interface IAuthorRepository
    {
		Task<IEnumerable<Author>> GetAll();
		Task<Author> GetById(int id);
	}
}
