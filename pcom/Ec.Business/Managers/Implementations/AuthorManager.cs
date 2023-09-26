using AutoMapper;
using Ec.Business.Dto.Response;
using Ec.Data.Repositories;
using Ec.Data.Repositories.Implementations;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Managers.Implementations
{
	public class AuthorManager : IAuthorManager
	{
		private readonly IAuthorRepository _authorRepository;
		private readonly IMapper _mapper;
		private readonly ILogger<AuthorManager> _logger;

		public AuthorManager(IAuthorRepository authorRepository, IMapper mapper, ILogger<AuthorManager> logger)
		{
			_authorRepository = authorRepository;
			_mapper = mapper;
			_logger = logger;
		}

		public async Task<List<AuthorDto>> GetAllAuthors()
		{
			_logger.LogInformation("Get all authors");
			var result = _mapper.Map<List<AuthorDto>>(await _authorRepository.GetAll());
			return result.ToList();
		}
		public async Task<AuthorDto> GetSingleAuthorById(int id)
		{
			_logger.LogInformation("Get all authors");
			var result = _mapper.Map<AuthorDto>(await _authorRepository.GetById(id));
			return result;
		}
	}
}
