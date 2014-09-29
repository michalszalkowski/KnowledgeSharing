package pl.btbw.web.resources.document;

import org.apache.log4j.Logger;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Map;

@Path("/")
public class DocumentController {

	private static Logger LOG = Logger.getLogger(DocumentController.class);

	@Inject
	private DocumentStorage documentStorage;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Map<Long, Map<String, Object>> list() {
		return documentStorage.all();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Map<String, Object> one(@PathParam("id") Long id) {
		return documentStorage.one(id);
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Map<String, Object> create(Map<String, Object> document) {
		return documentStorage.add(document);
	}

	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void update(@PathParam("id") Long id, Map<String, Object> document) {
		documentStorage.update(id, document);
	}

	@DELETE
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public void remove(@PathParam("id") Long id) {
		documentStorage.remove(id);
	}
}
