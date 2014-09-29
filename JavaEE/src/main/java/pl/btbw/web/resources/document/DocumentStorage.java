package pl.btbw.web.resources.document;

import javax.inject.Singleton;
import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Singleton
public class DocumentStorage implements Serializable {

	private Map<Long, Map<String, Object>> storage = new HashMap<>();

	public Map<Long, Map<String, Object>> all() {
		return storage;
	}

	public long add(Map<String, Object> document) {
		long id = new Date().getTime();
		document.put("_id", id);
		storage.put(id, document);
		return id;
	}

	public Map<String, Object> one(Long id) {
		return storage.get(id);
	}

	public void update(long id, Map<String, Object> document) {
		storage.put(id, document);
	}

	public void remove(long id) {
		storage.remove(id);
	}
}