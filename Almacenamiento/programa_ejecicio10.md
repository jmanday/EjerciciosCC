#!/usr/bin/ruby

require "azure"

azure_blob_service = Azure::BlobService.new

# listo los blobs del contenedor en esta variable
lista_blobs = azure_blob_service.list_blobs("taper-texto")


# creo el fichero donde almacenaré la lista de blobs del contenedor
f = File.open("lista-blobs.txt", "w")


# introduzco los nombres de los blobs del contenedor en el fichero
lista_blobs.each() do |blob|
	f.puts blob.name
end

# creo el fichero "rb" que se relacionará con el blob a partir del fichero creado antes
f2 = File.open("lista-blobs.txt", "rb") { |file| file.read }

# me creo un blob relacionado con el fichero y lo subo al contenedor
blob = azure_blob_service.create_block_blob("taper-texto","nuevo-blob", f2)