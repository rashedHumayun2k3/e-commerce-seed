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
	public class PublisherManager : IPublisherManager
	{
		private readonly IPublisherRepository _publisherRepository;
		private readonly IMapper _mapper;
		private readonly ILogger<PublisherManager> _logger;

		public PublisherManager(IPublisherRepository publisherRepository, IMapper mapper, ILogger<PublisherManager> logger)
		{
			_publisherRepository = publisherRepository;
			_mapper = mapper;
			_logger = logger;
		}

		public async Task<List<PublisherDto>> GetAllPublishers()
		{
			_logger.LogInformation("Get all Publishers");
			var result = _mapper.Map<List<PublisherDto>>(await _publisherRepository.GetAll());
			return result.ToList();
		}
		public async Task<PublisherDto> GetSinglePublisherById(int id)
		{
			_logger.LogInformation("Get all Publishers");
			var result = _mapper.Map<PublisherDto>(await _publisherRepository.GetById(id));
			return result;
		}
	}
}
