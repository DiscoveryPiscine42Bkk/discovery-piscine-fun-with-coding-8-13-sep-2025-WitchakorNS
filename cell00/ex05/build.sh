args=("$@")
if [ ${#args[@]} == 0 ]; then
echo "No arguments supplied"
else
n=${#args[@]}
for i in ${args[@]}
do
	if [ n == 0 ]; then
	break
	fi
	mkdir "ex$i"
	n=$((n + 1))
done
fi

